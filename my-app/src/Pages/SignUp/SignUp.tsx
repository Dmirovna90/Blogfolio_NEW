import { Link, NavLink } from "react-router-dom"
import Button from "../../Components/Button/Button"
import Input from "../../Components/Input/Input"
import Template from "../../Components/Template/Template"
import Title from "../../Components/Title/Title"

const SignUp = () => {
    return (
        <Template 
            title = {"Sign Up"} 
            inputA = {<Input type={"text"} title={"Name"} placeholder={"Your Name"} />}
            inputB = {<Input type={"text"} title={"Email"} placeholder={"Your Email"} />}
            inputC = {<Input type={"password"} title={"Password"} placeholder={"Your Password"} />}
            inputD = {<Input type={"password"} title={"Confirm password"} placeholder={"Confirm password"} />}
            button = {<Button buttonType = {'primary'}>Sign Up</Button>}
            text = {`Already have an account?`}
            link = {<NavLink to={'/sign-in'}>Sign In</NavLink>}
        >
        </Template>
    )
}
export default SignUp