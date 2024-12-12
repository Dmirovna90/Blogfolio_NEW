import style from './User.module.scss';

interface IProps {
    userName: string,
}
const User = ({userName}: IProps) => {
    const initials = (userName: string): string => {
        return userName.split(' ').map((item) => {
            return item[0]
        }).join('')
    }
    return (
        <div className = {style.userwrap}>
            <div className = {style.initials}>
                <span>{initials(userName)}</span>
            </div>
            <div className = {style.username}>
                <span>{userName}</span>
            </div>
        </div>
    )
}
export default User