import { NavLink, Route } from "react-router-dom";
import BurgerMenu from "../../UI-components/BurgerMenu/BurgerMenu";
import User from "../User/User";
import style from './Header.module.scss';
import Search from "../../UI-components/Search/Search";
import { useSelector } from "react-redux";
import SearchMyPosts from "../../UI-components/SearchMyPosts/SearchMyPosts";


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
                <User userName= {'Artem Malkin'}/>                
            </div>
           
        </div>
    )
}
export default Header