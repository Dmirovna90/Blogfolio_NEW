import { useDispatch, useSelector } from 'react-redux';
import style from './Profile.module.scss';
import { useEffect } from 'react';
import { getUserInfo } from '../../store/userMeSlice';
import User from '../../Components/User/User';
import { setPostInfo } from '../../store/selectedPostSlice';

const Profile = () => {
    const {auth} = useSelector((state) => state.signIn);
    const {UserInfo, loading, error} = useSelector((state) => state.userMe);
    const dispatch = useDispatch();
    useEffect(() =>{
        if(!auth) dispatch(getUserInfo())
    }, []);
    if(loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error</div>
    }
    return (
        <>
        <div>User here
            {UserInfo.username}</div>
        </>
        
    )
}
export default Profile