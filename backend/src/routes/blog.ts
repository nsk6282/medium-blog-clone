import { Hono } from 'hono'
import { Prisma, PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'

export const blogRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET:string
	},
    Variables:{
        UserId:string,
        prisma:any
    }
}>();


blogRouter.use('/*', async (c, next) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const auth = c.req.header('Authorization') || "";
  if(auth.startsWith("Bearer ")){
    const token = auth.split(" ")[1];
    const response = await verify(token,c.env.JWT_SECRET);
    // c.userId = response.id;
    if(!response){
      c.status(403);
      return c.json({
        error:"authentication unsuccessful"
      })
    }
    c.set("UserId",response.id);
    // console.log(c.get("jwtPayload"));
    c.set("prisma",prisma);
    await next();
  }
  else{
    c.status(403);
      return c.json({
        error:"authentication unsuccessful"
      })
  }

})


blogRouter.post('/',async (c)=>{
    const prisma = c.get("prisma");
    const body = await c.req.json();
    try{
        const post = await prisma.post.create({
            data:{
                title:body.title,
                content:body.content,
                author:{
                    connect:{
                        id:c.get("UserId")
                    }
                }
            }
        })
        return c.json({
            postId:post.id,
            msg:"Post added"
        })
    }catch(e){
        c.status(403);
        return c.json({
            error:"post was not added"
        })
    }
})

blogRouter.put('/',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    
    const body = await c.req.json();
    // console.log(c.get("UserId"));

    try{
        const post = await prisma.post.update({
            where:{
                id:body.id,
                authorId:c.get("UserId")
            },
            data:{
                title:body.title || undefined,
                content:body.content || undefined
            }
        })
        return c.json({
            msg:"Post updated"
        })
    }catch(e){
        c.status(403);
        return c.json({
            error:"error in updating the posts"
        })
    }
})

blogRouter.get('/:id',async (c)=>{
    const prisma = c.get("prisma");
    const id = await c.req.param('id');
    try{
        const posts = await prisma.post.findMany({
            where:{
                id
            },
            select:{
                title:true,
                content:true,
            }
        })
        return c.json({
            posts:posts
        })
    }catch(e){
        c.status(403);
        return c.json({
            error:"error in retriving the posts"
        })
    }
})

blogRouter.post('/bulk',async (c)=>{
    const prisma = c.get("prisma");
    try{
        const posts = await prisma.post.findFirst({});
        return c.json({
            posts:posts
        })
    }catch(e){
        c.status(403);
        return c.json({
            error:"error in retriving the posts"
        })
    }
})




