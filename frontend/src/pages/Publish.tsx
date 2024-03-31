import axios from "axios"
import { Appbar } from "../components/AppBar"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = ()=>{
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const navigate = useNavigate();
    return <div>
        <Appbar name="Sravan"/>
        <div className="flex justify-center mt-10">
            <div className="w-1/2">
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  
                " placeholder="Enter Title" onChange={e=>{
                    setTitle(e.target.value);
                }}/>
            </div>
        </div>
        <div className="flex justify-center mt-10">
            <div className="w-1/2 mb-4 border border-gray-200 rounded-lg bg-gray-50">
                        <div className="px-4 py-2 bg-white rounded-b-lg">
                        <textarea
                            rows={20}
                            className="block w-full px-0 text-sm text-gray-800 bg-white border-0 focus:ring-0"
                            placeholder="Write an article..."
                            required
                            defaultValue={""}
                            onChange={e=>{
                                setContent(e.target.value);
                            }}
                        />
                        </div>
            </div>         
        </div>
        <div className="flex justify-center">
        <button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
        onClick={async ()=>{
            const response  = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                title,
                content
            },{
                headers:{
                    "Authorization":"Bearer " + localStorage.getItem("token"),
                }
            });
            navigate(`/blog/${response.data.postId}`);
        }}
        >
            Publish post
        </button>
        </div>

    </div>
}


function TextArea(){
    return <div className="mt-2"> 
                <div className="w-1/2 mb-4 border border-gray-200 rounded-lg bg-gray-50">
                    <div className="px-4 py-2 bg-white rounded-b-lg">
                    <textarea
                        rows={20}
                        className="block w-full px-0 text-sm text-gray-800 bg-white border-0 focus:ring-0"
                        placeholder="Write an article..."
                        required
                        defaultValue={""}
                    />
                    </div>
                </div>
                <button
                    type="submit"
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
                >
                    Publish post
                </button>
    </div>
}