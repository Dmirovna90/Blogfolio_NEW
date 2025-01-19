import { NavLink } from "react-router-dom";
import BurgerMenu from "../../UI-components/BurgerMenu/BurgerMenu";
import User from "../User/User";
import style from './Header.module.scss';
import Search from "../../UI-components/Search/Search";
import { useSelector } from "react-redux";
import SearchMyPosts from "../../UI-components/SearchMyPosts/SearchMyPosts";
import {ReactComponent as Profile} from '../../assets/profile.svg'


const Header = () => {
    const { auth } = useSelector((state) => state.signIn);
    return (
        <div className = {style.header}>
            <BurgerMenu />
            <div className = {style.searchUserWrap}>
                {auth ? (
                    <>
                    <SearchMyPosts/>
                    </>
                ):(
                    <>
                    <Search/>
                    </>
                )
                }
                {auth ? <NavLink to = '/profile'><User/></NavLink> : <NavLink to = '/sign-in' className={style.userPointContainer}><Profile className = {style.userPoint} /></NavLink>}               
            </div>
           
        </div>
    )
}
export default Header