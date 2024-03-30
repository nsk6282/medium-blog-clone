import { Quote } from "../components/Quote"
import { SigninBox } from "../components/SigninBox"

export const Signin = ()=>{
    return <div>
        <div className="grid grid-cols-2">
            <div className="h-screen flex justify-center flex-col col-span-2 lg:col-span-1">
                <div className="flex justify-center">
                    <div className="max-w-3xl items-center">
                        <SigninBox/>
                    </div>
                </div>
            </div>
            <div className="invisible lg:visible">
                <Quote/>
            </div>
        </div>
    </div>
}

function onClick(){
    console.log("signup bitch");
}