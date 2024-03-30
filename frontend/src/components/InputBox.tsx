import { ChangeEvent } from "react";

interface LabelledInputType {
    label:string;
    placeholder:string;
    onChange : (e:ChangeEvent<HTMLInputElement>)=>void;
    type?:string;
}
export const InputBox = ({label,placeholder,onChange,type}:LabelledInputType)=>{
    return <div className="w-full my-3">
        <div className="mb-2 text-xl font-medium">
            {label}
        </div>
        <input  type={type || "text"}  placeholder={placeholder} className="border border-slate-400 rounded w-full p-3" onChange={onChange}/>
    </div>
}