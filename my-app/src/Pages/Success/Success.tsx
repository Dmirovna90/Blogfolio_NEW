import Button from "../../Components/Button/Button";
import Template from "../../Components/Template/Template";
import style from '../Activate/Activate.module.scss';

const Success = () => {
    return (
        <Template title = {"Success"}>
            <div className = {style.textWrap}>
                <p>Email confirmed.</p>
                <p>Your registration is now completed</p>
            </div>
            <Button buttonType = {'primary'}>Go to home</Button>
        </Template>
    )
}
export default Success