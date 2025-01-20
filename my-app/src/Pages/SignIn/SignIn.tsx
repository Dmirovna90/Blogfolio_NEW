import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import Button from "../../Components/Button/Button"
import Input from "../../Components/Input/Input"
import Template from "../../Components/Template/Template"
import style from './SignIn.module.scss'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { refreshToken, signInUser } from "../../store/signInSlice"
import { AsyncThunkAction } from "@reduxjs/toolkit"
interface ILogin {
    email: string;
    password: string;
}
const SignIn = () => {
    const [loginData, setLoginData] = useState<ILogin>({
        email: '',
        password: '',
    });
    const { auth } = useSelector((state) => state.signIn);
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({ ...prev, [name]: value }));
    };
    const dispatch = useDispatch();
    const location = useLocation();
    const formHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(signInUser(loginData));
    };
    useEffect(() => {
        if (auth) {
            navigate('/my-posts', {replace: true});
        }
    }, [auth])
    const navigate = useNavigate();
    return (
       <Template title = {'Sign In'}>
            <form onSubmit = {formHandler}>
                <Input type={"text"} title={"Email"} placeholder={"Your Email"} name = {'email'}  onChange = {inputHandler}/>
                <Input type={"password"} title={"Password"} placeholder={"Your Password"} name = {'password'} onChange = {inputHandler}/>
                <div className = {style.link}>
                    <NavLink to={'/'}>Forgot password?</NavLink>
                </div>
                <Button buttonType = {'primary'} type = {'submit'} >Sign In</Button>
                <p>Don`t have an account? <Link to = {'/sign-up'} className = {style.button}>Sign Up</Link></p> 
            </form>
 
        </Template>
     )
}
export default SignIn