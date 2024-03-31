import { Link } from "react-router-dom"

export const Appbar = ({name}:{name:string})=>{
    return <div className="flex justify-between px-3 py-3 mb-1 border-b">
        <div className="flex flex-col justify-center font-bold text-2xl cursor-pointer">
            <Link to={`/blogs`}>
                Medium
            </Link>
        </div>
        <div>
            <div>
            <Link to={'/publish'}>
                    <button type="button" className=" mr-4 text-white bg-green-600 hover:bg-green-800 focus:outline-none 
                    focus:ring-4 focus:ring-green-300 font-medium rounded-full text-md px-5 py-2.5 text-center me-2 mb-2 
                    "> New </button>
            </Link>
                <Avatar name={name}/>
            </div>
        </div>
    </div>
}

const Avatar=({name}:{name:string})=>{
    return <div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="text-gray-600 dark:text-gray-300 text-lg">{name.split(" ").length>=2?name.split(" ")[0][0]+name.split(" ")[1][0]:name.split(" ")[0][0]}</span>
</div>
}
