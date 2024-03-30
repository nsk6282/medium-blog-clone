
import { Quote } from "../components/Quote"
import { SignupBox } from "../components/SignupBox"

export const Signup = ()=>{
    return <div>
        <div className="grid grid-cols-2">
            <div className="h-screen flex justify-center flex-col col-span-2 lg:col-span-1">
                <div className="flex justify-center">
                    <div className="max-w-3xl items-center">
                        <SignupBox/>
                    </div>
                </div>
            </div>
            <div className="invisible lg:visible">
                <Quote/>
            </div>
        </div>
    </div>
}
