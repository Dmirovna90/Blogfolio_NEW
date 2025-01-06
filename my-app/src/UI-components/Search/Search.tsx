import style from './Search.module.scss'
import { searchActive } from '../../store/searchSlice';
import {ReactComponent as SearchImg} from '../../assets/search.svg';
import SearchInput from '../SearchInput/SearchInput';
import Input from '../../Components/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import {ReactComponent as Cancel} from '../../assets/cancelIcon.svg';

const Search = () => {
    const {isActive} = useSelector((state) => state.search);
    const dispatch = useDispatch();
    return( 
        <button className = {style.searchButton} onClick={() => dispatch(searchActive())}>
                <SearchImg/>
        </button>
    )
}
export default Search