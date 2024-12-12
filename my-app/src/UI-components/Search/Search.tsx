import style from './Search.module.scss'
import { toggleActive } from '../../store/activeSlice';
import {ReactComponent as SearchImg} from '../../assets/search.svg';
import SearchInput from '../SearchInput/SearchInput';

const Search = () => {
    return <button className = {style.searchButton} onClick={() => console.log('click')}>
        <SearchImg/>
    </button>
}
export default Search