import { useDispatch, useSelector } from 'react-redux';
import {ReactComponent as Cancel} from '../../assets/cancelIcon.svg';
import { toggleActive } from '../../store/activeSlice';
import Search from '../Search/Search';
import { searchActive } from '../../store/searchSlice';
import style from './SearchInput.module.scss';
const SearchInput = () => {
    // const dispatch = useDispatch(); 
    // const {isActive} = useSelector((state) => state.search);
    // return (
    // <div className={!isActive ? style.search : `${style.search} ${style.active}`}>
    //     <input></input>
    //     <button onClick={() => dispatch(searchActive())}>
    //     <Cancel />
    //     </button>
    // </div>
    // )
}
export default SearchInput