import style from './Input.module.scss'
interface IProps {
    title: string,
    placeholder?: string,
    type: string
}
const Input = ({title, type = 'text', placeholder = "Placeholder"}: IProps) => {
    return (
        <div className = {style.input}>
            <label className = {style.inputTitle}>{title}</label>
            <input 
                className = {style.inputField}
                type = {type}
                placeholder = {placeholder}
            ></input>
        </div>
    )
}
export default Input

