import { Hono } from 'hono'
import { Prisma, PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'

export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET:string
	}
}>();

userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
  
    try{
        const user = await prisma.user.create({
          data:{
            email:body.email,
            password:body.password
          }
        });
      
        const jwt = await sign({id:user.id},c.env.JWT_SECRET);
        return c.json({jwt}); 
  
    }catch(e){
      c.status(403);
      c.json({
        msg:"error while signing up"
      })
    }
    
  })
  
userRouter.post('/signin', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
    try{
      const user = await prisma.user.findUnique({
        //@ts-ignore
        where:{
          email:body.email,
          password:body.password,
        }
      });
      if(!user){
        c.status(403);
        return c.json({
          msg:"user not found"
        });
      }
      const jwt = await sign({id:user.id},c.env.JWT_SECRET);
      return c.json({jwt});
      
    }catch(e){
      c.status(403);
      c.json({
        msg:"error while signing in"
      })
    }
});
