import { NavLink } from "react-router-dom"
import Button from "../../Components/Button/Button"
import Input from "../../Components/Input/Input"
import Template from "../../Components/Template/Template"
import style from './SignIn.module.scss'

const SignIn = () => {
    return (
       <Template title = {'Sign In'}>
            <Input type={"text"} title={"Email"} placeholder={"Your Email"} />
            <Input type={"password"} title={"Password"} placeholder={"Your Password"} />
            <div className = {style.link}>
                <NavLink to={'/'}>Forgot password?</NavLink>
            </div>
            <Button buttonType = {'primary'}>Sign In</Button>
            <p>Don`t have an account? <NavLink to={'/sign-up'}>Sign Up</NavLink></p>  
        </Template>
     )
}
export default SignIn