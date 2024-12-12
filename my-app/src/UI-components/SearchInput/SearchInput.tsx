import { useDispatch, useSelector } from 'react-redux';
import {ReactComponent as Cancel} from '../../assets/cancelIcon.svg';
import { toggleActive } from '../../store/activeSlice';
import Search from '../Search/Search';
const SearchInput = () => {
    const dispatch = useDispatch(); 
    const {isActive} = useSelector((state) => state.active);
    return (
    <div>
        <input></input>
        <button onClick={() => dispatch(toggleActive())}>
        <Cancel />
        </button>
    </div>
    )
}
export default SearchInput