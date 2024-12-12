import {ReactComponent as Light} from '../../assets/light.svg';
import {ReactComponent as Dark} from '../../assets/dark.svg';
import { Link, NavLink } from "react-router-dom";
import style from './Navbar.module.scss';
import User from "../User/User";
import { useDispatch, useSelector } from 'react-redux';
import { switchTheme } from '../../store/themeSlice';
import {toggleActive} from '../../store/activeSlice';
import InputOutput from '../InputOutput/InputOutput';

const Navbar = () => {
    const {isActive} = useSelector((state) => state.active);
    const dispatch = useDispatch();
    return (
        <div className={!isActive ? style.navbar : `${style.navbar} ${style.active}`}>
            <div className = {style.menuBox}>
                <NavLink to = '/user' className = {style.userPoint} onClick={() => dispatch(toggleActive())}><User userName= {'Artem Malkin'}/></NavLink>
                <NavLink to = '/' className = {style.menuPoint} onClick={() => dispatch(toggleActive())}>Home</NavLink>
                {/* <NavLink to = '/add-post' className = {style.menuPoint} onClick={() => dispatch(toggleActive())}>Add Post</NavLink> */}
                <NavLink to = '/posts' className = {style.menuPoint} onClick={() => dispatch(toggleActive())}>All Posts</NavLink>

            </div>
            <div className = {style.menuBox}>
                <div className = {style.buttonThemeWrap}>
                <button className = {style.buttonTheme} onClick={() => dispatch(switchTheme("light"))}><Light /> </button>
                <button className = {style.buttonTheme} onClick={() => dispatch(switchTheme("dark"))}> <Dark /></button>
                </div>
                <InputOutput title = {"Sign In"}/>
            </div>
        </div>
    )
}
export default Navbar