import style from './TextArea.module.scss';

interface IProps {
    title: string,
    placeholder?: string,
}
const Input = ({title, placeholder = "Placeholder"}: IProps) => {
    return (
        <div className = {style.textarea}>
            <label className = {style.textareaTitle}>{title}</label>
            <textarea 
                className = {style.textareaField}
                placeholder = {placeholder}
            ></textarea>
        </div>
    )
}
export default Input

