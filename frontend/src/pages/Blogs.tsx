import { Appbar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"

export const Blogs = ()=>{
    const {loading,blogs} = useBlogs();
    // console.log(blogs);
    if(loading){
        return <div>
            <div>
                <Appbar name={"Sravan"}/>
            </div>
            <div>
                <BlogSkeleton/>
            </div>
            <div>
                <BlogSkeleton/>
            </div>
            <div>
                <BlogSkeleton/>
            </div>
            <div>
                <BlogSkeleton/>
            </div>
            <div>
                <BlogSkeleton/>
            </div>
        </div>
    }
    return <div>
        <div>
            <Appbar name={"Sravan"}/>
        </div>
        <div>
            {blogs.map(blog=> <BlogCard 
        name={blog.author.name || "Anonymous"}
        title={blog.title}
        content={blog.content}
        date="Dec 3,2023"
        id={blog.id}
        />)}
    </div>
    </div>
}