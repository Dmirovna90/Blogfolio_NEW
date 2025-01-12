import style from './Button.module.scss'
interface IProps {
    children: React.ReactNode;
    isDisabled?: boolean;
    buttonType?: 'primary' | 'secondary' | 'secondary2';
    click?: (() => void) | undefined;
    type?:  "submit" | "reset" | "button" | undefined;
}
const Button = ({
    children,
    isDisabled = false,
    buttonType = 'primary',
    type = 'submit',
    click,
} : IProps) => {
    return(
        <button className = {style[buttonType]} disabled= {isDisabled} onClick = {click} type = {type}>
            {children}
        </button>
    )
}
export default Button