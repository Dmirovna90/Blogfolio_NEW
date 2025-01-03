import style from './Button.module.scss'
interface IProps {
    children: React.ReactNode;
    isDisabled?: boolean;
    buttonType?: 'primary' | 'secondary' | 'secondary2';
    click?: (() => void);
}
const Button = ({
    children,
    isDisabled = false,
    buttonType = 'primary',
    click,
} : IProps) => {
    return(
        <button className = {style[buttonType]} disabled= {isDisabled} onClick = {click}>
            {children}
        </button>
    )
}
export default Button