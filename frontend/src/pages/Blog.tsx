import { Appbar } from "../components/AppBar";
import { FullBlog } from "../components/FullBlog";
import { FullBlogSkeleton } from "../components/FullBlogSkeleton";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";

type BlogParams = {
    id:string;
}
export const Blog = ()=>{
    const {id} = useParams<BlogParams>();
    const {loading,blog} = useBlog({id:id || ""});
    console.log(blog);
    if(loading || !blog){
        return <div>
            <Appbar name={"Sravan"}/>
            <FullBlogSkeleton/>
        </div>
    }
    return <div>
         <Appbar name={"Sravan"}/>
         <FullBlog blog={blog}  /> 
    </div>
}

