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
                <NavLink to = '/user' className = {style.userPoint} onClick={() => console.log('click')}><User userName= {'Artem Malkin'}/></NavLink>
            </div>
           
        </div>
    )
}
export default Header