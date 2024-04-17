import { BottomWarning  } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signup = () => {
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label="Sign Up"/>
            <SubHeading label="Enter your information to create an account"/>
            <InputBox label="First Name" placeholder="Enter Name"/>
            <InputBox label="Last Name" placeholder="Enter Last Name"/>
            <InputBox label="Email" placeholder="Enter Email"/>
            <InputBox label="Password" placeholder="Enter Password"/>
            <div className="pt-4">
            <Button label="Sign Up"/>
            </div>
            <BottomWarning label="Already have an account?" buttonText="Sign in" to="/signin"/>
           
        </div>
    </div>
    </div>
}