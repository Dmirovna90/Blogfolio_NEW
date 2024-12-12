import style from "./Title.module.scss"
interface IProps {
    title?: string;
    children?: React.ReactNode;
}
const Title = ({title, children}: IProps) => {
    if (title === undefined) {
        return children
    }
    return (
        <div>
            <p className = {style.title}>{title}</p>
        </div>
    )
}
export default Title