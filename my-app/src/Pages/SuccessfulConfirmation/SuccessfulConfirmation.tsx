import Button from "../../Components/Button/Button";
import Template from "../../Components/Template/Template";
import { Link, useNavigate, useParams } from "react-router-dom";
import style from './SuccessfulConfirmation.module.scss';
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { activateUser } from "../../store/SignUpSlice";

const SuccessfulConfirmation = () => {
    const data = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
      dispatch(activateUser(data));
    }, []);    
    return (
        <Template title = {"Registration Confirmation"}>
            <div className = {style.textWrap}>
                <p>Please activate your account with the activation link in the email <Link to = {'/'} className = {style.link}>example@gmail.com.</Link></p>
                <p>Please, check your email</p>
            </div>
            <Button buttonType = {'primary'} click = {() => navigate(`/`)}>Go to home</Button>
        </Template>
    )
}
export default SuccessfulConfirmation;