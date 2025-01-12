import { useSelector } from 'react-redux';
import style from './User.module.scss';
import {ReactComponent as Profile} from '../../assets/profile.svg'
import { useNavigate } from 'react-router-dom';

interface IProps {
    userName: string,
}
const User = ({userName}: IProps) => {
    const { auth } = useSelector((state) => state.signIn);
    const navigate = useNavigate();
    const initials = (userName: string): string => {
        return userName.split(' ').map((item) => {
            return item[0]
        }).join('')
    }
    return (
        <>
        {auth ? (
            <div className = {style.userwrap}>
                <div className = {style.initials}>
                    <span>{initials(userName)}</span>
                </div>
                <div className = {style.username}>
                    <span>{userName}</span>
                </div>
            </div>
        ) : (
                <button className = {style.profileWrap} onClick = {() => navigate('/sign-in')}> <Profile className = {style.profile}/></button>
        )
        } 


        </>

    )
}
export default User