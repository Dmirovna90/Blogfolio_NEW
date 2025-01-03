import Button from "../../Components/Button/Button";
import Template from "../../Components/Template/Template";
import { Link } from "react-router-dom";
import style from './SuccessfulConfirmation.module.scss';

const SuccessfulConfirmation = () => {
    return (
        <Template title = {"Registration Confirmation"}>
            <div className = {style.textWrap}>
                <p>Please activate your account with the activation link in the email <Link to = {'/'} className = {style.link}>example@gmail.com.</Link></p>
                <p>Please, check your email</p>
            </div>
            <Button buttonType = {'primary'}>Go to home</Button>
        </Template>
    )
}
export default SuccessfulConfirmation;