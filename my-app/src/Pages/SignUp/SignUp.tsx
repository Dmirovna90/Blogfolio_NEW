import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import Button from "../../Components/Button/Button"
import Input from "../../Components/Input/Input"
import Template from "../../Components/Template/Template"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { signUpUser } from "../../store/signUpSlice"
import style from '../SignIn/SignIn.module.scss'

const SignUp = ({uid, token}: any) => {
    const [registrationData, setRegistrationData] = useState({
        username: "",
        email: "",
        password: "",
        course_group: 14,        
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
      e?.preventDefault();
      dispatch(signUpUser(registrationData));
    };
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRegistrationData((prev) => ({
          ...prev,
          [name]: value,
        }));
    };
    // const signInHandler = () => {
    //     navigate('/sign-in', {state: {from: location}});
    // }
    const { pathname } = (useLocation().state || { from: `/activate/${uid}/${token}` }).from;
    const { activated } = useSelector((state) => state.user);
    const location = useLocation();
    useEffect(() => {
        if (activated) {
            navigate(pathname, {replace: true})
        }
    }, [activated])
    return (
        <Template title = {"Sign Up"}>
            <form onSubmit = {formHandler}>
                <Input type={"text"} title={"Name"} placeholder={"Your Name"} name = {'username'} value = {registrationData.username} onChange = {inputHandler}/>
                <Input type={"text"} title={"Email"} placeholder={"Your Email"} name = {'email'} value = {registrationData.email} onChange = {inputHandler}/>
                <Input type={"password"} title={"Password"} placeholder={"Your Password"} name = {'password'} value = {registrationData.password} onChange = {inputHandler}/>
                {/* <Input type={"password"} title={"Confirm password"} placeholder={"Confirm password"} name = {'password'} value = {registraionData.password} onChange = {inputHandler}/> */}
                <Button buttonType = {'primary'} type = {"submit"} click = {() => navigate(`/activate/${uid}/${token}`)}>Sign Up</Button>
                <p>Already have an account? <Link to = {'/sign-in'} className = {style.button}>Sign In</Link></p>  
            </form>
        
        </Template>
    )
}
export default SignUp