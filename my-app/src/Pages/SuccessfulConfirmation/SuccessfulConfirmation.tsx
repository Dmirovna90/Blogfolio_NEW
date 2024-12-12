import Button from "../../Components/Button/Button";
import Template from "../../Components/Template/Template";

const SuccessfulConfirmation = () => {
    return (
        <Template 
        title = {"Registration Confirmation"}
        text = {`Please activate your account with the activation link in the email `}
        link = {'example@gmail.com. '}
        textA = {' Please, check your email'}

        buttonA = {<Button buttonType = {'primary'}>Go to home</Button>}

        />
    )
}
export default SuccessfulConfirmation;