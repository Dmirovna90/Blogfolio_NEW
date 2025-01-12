import style from "./Title.module.scss"
interface IProps {
    title?: string;
}
const Title = ({title}: IProps) => {
    return (
        <>
            {!!title && <div>
                <p className = {style.title}>{title}</p>
            </div> }
        </>
    )
}
export default Title