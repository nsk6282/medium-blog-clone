import { useState } from "react";
import { InputBox } from "./InputBox"
import { Link, useNavigate } from "react-router-dom"
import { SigninType } from "@nsravankumar/medium-common-clone";
import axios from "axios";
import { BACKEND_URL } from "../config";
export const SigninBox=()=>{
    const [postInputs,setPostInputs] = useState<SigninType>({
        email:"",
        password:"",
    });
    const navigate = useNavigate();
    async function onClick(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`,postInputs);
            const jwt = response.data.jwt;
            console.log(response.data.jwt);
            localStorage.setItem("token",jwt);
            navigate("/blogs/1");
        }catch(e){
            alert("error while logging in");
        }
    }
    return <div className="w-96">
        <div className="text-center font-bold text-4xl my-3">
            Login
        </div>
        <div className="text-center text-xl text-slate-500">
            Don't have an Account ?  
            <Link to={"/signup"} className="underline">Sign Up </Link>
        </div>
        <InputBox label="Email" placeholder="m@example.com" onChange={(e)=>{
            setPostInputs(c=>({
                ...c,
                email:e.target.value
            }))
        }} />
        <InputBox label="Password"  type="password" placeholder="" onChange={(e)=>{
            setPostInputs(c=>({
                ...c,
                password:e.target.value
            }))
        }} />
        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-2 py-4 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full mt-4" onClick={onClick}>Login</button>
    </div>
}
