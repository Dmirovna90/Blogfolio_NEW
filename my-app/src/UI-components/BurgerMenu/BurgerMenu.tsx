import {ReactComponent as Menu} from '../../assets/menuIcon.svg';
import {ReactComponent as Cancel} from '../../assets/cancelIcon.svg';
import style from './BurgerMenu.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleActive } from '../../store/activeSlice';

const BurgerMenu = () => {
    const dispatch = useDispatch();
    const {isActive} = useSelector((state) => state.active);
    return <button className = {style.burgermenu} onClick={() => dispatch(toggleActive())}>
        {!isActive ? <Menu className='burger'/> : <Cancel className='burger'/>}
        </button>
}
export default BurgerMenu