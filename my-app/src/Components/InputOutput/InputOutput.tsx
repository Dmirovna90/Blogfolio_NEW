import style from "./InputOutput.module.scss"
interface IProps {
    children?: string;
    onClick?: any;
}
const InputOutput = ({ children, onClick}: IProps) => {
    return (
        <button className = {style.titleInputOutput} onClick = {onClick}>
            {children}
        </button>
    )
}
export default InputOutput