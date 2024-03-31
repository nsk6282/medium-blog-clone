import { Link } from "react-router-dom";

interface BlogProps{
    name:string;
    title:string;
    content:string;
    date:string;
    id:string;
}
export const BlogCard = ({
    name,
    title,
    content,
    date,
    id,
}:BlogProps)=>{
    
    return  <Link to={`../blog/${id}`}>
        <div className="flex justify-center">
            <div className="border-b border-slate-400 w-1/2 py-6 cursor-pointer">
                <div className="flex flex-row justify-start">
                    <div>
                        <Avatar name={name}/>
                    </div>
                    <div className="flex items-center pl-2 text-lg">
                        {name}
                    </div>
                    <div className="flex items-center px-1 text-slate-500">
                    •
                    </div>
                    <div className="flex items-center text-slate-500">
                        {date}
                    </div>
                </div>
                <div className="grid grid-cols-5 mb-5">
                    <div className="col-span-5">
                        <div className="text-2xl font-bold mb-4">
                            {title}
                        </div>
                        <div className="text-xl">
                            {content.length<=200?content:content.slice(0,200) + "..."}
                        </div>
                    </div>
                    <div className="bg-red-500 col-span-1">
                        <img src=""/>
                    </div>
                </div>
                <div className="mt-3">
                    {`${Math.ceil(content.length/500)} min read`}
                </div>
            </div>
        </div>
    </Link>
}

const Avatar=({name}:{name:string})=>{
    return <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="text-gray-600 dark:text-gray-300">{name.split(" ").length>=2?name.split(" ")[0][0]+name.split(" ")[1][0]:name.split(" ")[0][0]}</span>
</div>
}
