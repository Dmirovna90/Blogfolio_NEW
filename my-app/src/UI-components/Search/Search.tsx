import style from './Search.module.scss'
import { searchActive } from '../../store/searchSlice';
import {ReactComponent as SearchImg} from '../../assets/search.svg';
import SearchInput from '../SearchInput/SearchInput';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts, setPage, setSearchQuery } from '../../store/postsSlice';

const Search = () => {
    const {
        searchQuery,
      } = useSelector((state) => state.posts);
    useEffect(() => {
        dispatch(
          fetchPosts({
            searchQuery: searchQuery,
          })
        );
      }, []);
    const dispatch = useDispatch();
    const handlerSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(
          fetchPosts({
            searchQuery: searchQuery,
          })
        );
        dispatch(setPage(1));
      };
      const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        dispatch(setSearchQuery(value));
      };
    return(
        <form onSubmit = {handlerSubmit} className = {style.searchWrap}>
            <SearchInput type = {'text'} placeholder = {'Search...'} value = {searchQuery} onChange={handlerInput}/>
            <button type = 'submit' className = {style.searchButton} onClick={() => dispatch(searchActive())}>
                <SearchImg/>
            </button>
        </form>

    )
}
export default Search