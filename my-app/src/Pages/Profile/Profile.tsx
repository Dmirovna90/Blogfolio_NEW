import { useDispatch, useSelector } from 'react-redux';
import style from './Profile.module.scss';
import { useEffect } from 'react';
import { getUserInfo } from '../../store/userMeSlice';

const Profile = () => {
    const {auth} = useSelector((state) => state.signIn);
    const dispatch = useDispatch();
    useEffect(() =>{
        if(!auth) dispatch(getUserInfo())
    }, [])
    
    return (
        <>
        <div>Profile</div>
        </>
        
    )
}
export default Profile