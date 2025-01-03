import { Link, NavLink } from "react-router-dom"
import Button from "../../Components/Button/Button"
import Input from "../../Components/Input/Input"
import Template from "../../Components/Template/Template"

const SignUp = () => {
    return (
        <Template title = {"Sign Up"}>
            <Input type={"text"} title={"Name"} placeholder={"Your Name"} />
            <Input type={"text"} title={"Email"} placeholder={"Your Email"} />
            <Input type={"password"} title={"Password"} placeholder={"Your Password"} />
            <Input type={"password"} title={"Confirm password"} placeholder={"Confirm password"} />
            <Button buttonType = {'primary'}>Sign Up</Button>
            <p>Already have an account? <NavLink to={'/sign-in'}>Sign In</NavLink></p>          
        </Template>
    )
}
export default SignUp