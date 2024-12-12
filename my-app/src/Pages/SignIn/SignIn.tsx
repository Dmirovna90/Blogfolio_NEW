import { NavLink } from "react-router-dom"
import Button from "../../Components/Button/Button"
import Input from "../../Components/Input/Input"
import Template from "../../Components/Template/Template"

const SignIn = () => {
    return (
        <>
            <Template
                title = {"Sign In"} 
                inputB = {<Input type={"text"} title={"Email"} placeholder={"Your Email"} />}
                inputC = {<Input type={"password"} title={"Password"} placeholder={"Your Password"} />}
                button = {<Button buttonType = {'primary'}>Sign In</Button>}
                textB = {<NavLink to={'/'}>Forgot password?</NavLink>}
                text = {'Don`t have an account? '}
                link = {<NavLink to={'/sign-up'}>Sign Up</NavLink>}           
            >
            </Template>
        </>
    )
}
export default SignIn