import {ReactComponent as Light} from '../../assets/light.svg';
import {ReactComponent as Dark} from '../../assets/dark.svg';
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import style from './Navbar.module.scss';
import User from "../User/User";
import { useDispatch, useSelector } from 'react-redux';
import { switchTheme } from '../../store/themeSlice';
import {toggleActive} from '../../store/activeSlice';
import InputOutput from '../InputOutput/InputOutput';
import { stopTokenUpdate } from '../../store/signInSlice';

const Navbar = () => {
    const {isActive} = useSelector((state) => state.active);
    const { auth } = useSelector((state) => state.signIn);
    const toggleSideBar = () => dispatch(toggleActive());
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const signInHandler = () => {
        navigate("/sign-in", { state: { from: location } });
        toggleSideBar();
      };
    return (
        <div className={!isActive ? style.navbar : `${style.navbar} ${style.active}`}>
            <div className = {style.menuBox}>
                <NavLink to = '/user' className = {style.userPoint} onClick = {toggleSideBar}><User userName= {'Artem Malkin'}/></NavLink>
                <NavLink to = '/' className = {style.menuPoint} onClick = {toggleSideBar}>Home</NavLink>
               {auth && (
                <>
                    <NavLink to = '/add-post' className = {style.menuPoint} onClick={toggleSideBar}>Add Post</NavLink>
                    <NavLink to = '/my-posts' className = {style.menuPoint} onClick = {toggleSideBar}>My Posts</NavLink>
                </>
               )}
                <NavLink to = '/posts' className = {style.menuPoint} onClick = {toggleSideBar}>All Posts</NavLink>

                <NavLink to = '/profile' className = {style.menuPoint} onClick = {toggleSideBar}>Profile</NavLink>


            </div>
            <div className = {style.menuBox}>
                <div className = {style.buttonThemeWrap}>
                <button className = {style.buttonTheme} onClick={() => dispatch(switchTheme("light"))}><Light /> </button>
                <button className = {style.buttonTheme} onClick={() => dispatch(switchTheme("dark"))}> <Dark /></button>
                </div>
                {!auth ? (
                    <>
                        <InputOutput children = {"Sign In"} onClick ={signInHandler}/>
                    </>
                ) : (
                    <>                        
                        <InputOutput children = {"Log Out"} onClick={() => dispatch(stopTokenUpdate(), navigate('/'))}/>
                    </> 
                )}
            </div>
        </div>
    )
}
export default Navbar