import { NavLink } from "react-router-dom";
import BurgerMenu from "../../UI-components/BurgerMenu/BurgerMenu";
import User from "../User/User";
import style from './Header.module.scss';
import Search from "../../UI-components/Search/Search";


const Header = () => {
    return (
        <div className = {style.header}>
            <BurgerMenu />
            <div className = {style.searchUserWrap}>
                <Search/>
                <User userName= {'Artem Malkin'}/>                
            </div>
           
        </div>
    )
}
export default Header