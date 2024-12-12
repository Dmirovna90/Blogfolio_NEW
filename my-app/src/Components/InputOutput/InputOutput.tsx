import style from "./InputOutput.module.scss"
interface IProps {
    title?: string;
    children?: React.ReactNode;
}
const InputOutput = ({title, children}: IProps) => {
    if (title === undefined) {
        return children
    }
    return (
        <div className = {style.titleInputOutput}>
            <p>{title}</p>
        </div>
    )
}
export default InputOutput