import { Blog } from "../hooks";


export const FullBlog = ({blog}:{blog:Blog})=>{
    return <div className="grid grid-cols-12 py-10 pl-10">
        <div className="col-span-12 lg:col-span-8 p-10">
            <div className="text-5xl font-extrabold py-2"> 
                {blog.title}
            </div>
            <div className="text-slate-500 text-xl py-4">
                Posted on {"12 Dec 2023"}
            </div>
            <div className="py-2 text-xl"> 
                {blog.content}
            </div>
            {/* <div className="py-10 text-2xl ">
                Comments
            </div> */}
        </div>
        <div className="col-span-4 py-12 pl-5 invisible lg:visible">
            <div className="text-2xl text-left">
                Author
            </div>
            <div className="flex justify-start">
                <div className="flex flex-col justify-center pr-4">
                    <Avatar name={blog.author.name || "Anonymous"}/>
                </div>
                <div className="pr-20">
                    <div className="text-3xl font-bold pt-3">
                        {blog.author.name || "Anonymous"}
                    </div>
                    <div className="text-slate-500 text-xl py-4"> 
                        Master of mirth, purveyor of puns and the funniest person in the kingdom
                    </div>
                </div>
            </div>
            
        </div>
    </div>
}

const Avatar=({name}:{name:string})=>{
    return <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="text-gray-600 dark:text-gray-300">{name.split(" ").length>=2?name.split(" ")[0][0]+name.split(" ")[1][0]:name.split(" ")[0][0]}</span>
</div>
}