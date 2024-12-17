import style from './Button.module.scss'
interface IProps {
    children: React.ReactNode;
    isDisabled?: boolean;
    buttonType?: 'primary' | 'secondary' | 'secondary2';
    onClick?: (() => void);
}
const Button = ({
    children,
    isDisabled = false,
    buttonType = 'primary',
} : IProps) => {
    return(
        <button className = {style[buttonType]} disabled= {isDisabled} onClick = {() => console.log('click')}>
            {children}
        </button>
    )
}
export default Button