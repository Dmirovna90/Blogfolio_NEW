import Button from "../../Components/Button/Button";
import Template from "../../Components/Template/Template";

const Success = () => {
    return (
        <Template 
        title = {"Success"}
        textB = {`Email confirmed. Your registration is now completed.`}
        text = {' Your registration is now completed`'}

        buttonA = {<Button buttonType = {'primary'}>Go to home</Button>}

        />
    )
}
export default Success