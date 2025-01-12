import style from './Input.module.scss'
interface IProps {
    title: string,
    placeholder?: string,
    type: string,
    name?: string,
    value?: string,
    onChange?: any,
}
const Input = ({title, type = 'text', placeholder = "Placeholder", name, value, onChange}: IProps) => {
    return (
        <div className = {style.input}>
            <label className = {style.inputTitle}>{title}</label>
            <input 
                className = {style.inputField}
                type = {type}
                placeholder = {placeholder}
                name = {name}
                value = {value}
                onChange = {onChange}
            ></input>
        </div>
    )
}
export default Input

