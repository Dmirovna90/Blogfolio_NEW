import style from './TextArea.module.scss';

interface IProps {
    title: string,
    placeholder?: string,
    type?: string,
    name?: string,
    value?: string,
    onChange?: any,
}
const TextArea = ({title, type = 'text', placeholder = "Placeholder", name, value, onChange}: IProps) => {
    return (
        <div className = {style.textarea}>
            <label className = {style.textareaTitle}>{title}</label>
            <textarea 
                className = {style.textareaField}
                type = {type}
                placeholder = {placeholder}
                name = {name}
                value = {value}
                onChange = {onChange}
            ></textarea>
        </div>
    )
}
export default TextArea

