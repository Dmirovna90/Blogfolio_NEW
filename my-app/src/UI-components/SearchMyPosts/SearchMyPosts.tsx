import style from '../Search/Search.module.scss'
import { searchActive } from '../../store/searchSlice';
import {ReactComponent as SearchImg} from '../../assets/search.svg';
import SearchInput from '../SearchInput/SearchInput';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMyPosts, setSearchQuery} from '../../store/myPostsSlice';

const SearchMyPosts = () => {
      const { searchQuery, offset, ordering } = useSelector((state) => state.myPosts);
      useEffect(() => {
        dispatch(
          getMyPosts({
            searchQuery: searchQuery,
          }))    
        }, []);
      const dispatch = useDispatch();
      const handlerSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
          e.preventDefault();
          dispatch(
            getMyPosts({
              searchQuery: searchQuery,
              offset: 0,
              ordering: ordering,
            })
          );
        };
        const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
          const { value } = e.target;
          dispatch(setSearchQuery(value));
        };
    return(
        <form onSubmit = {handlerSubmit} className = {style.searchWrap}>
            <SearchInput type = {'text'} placeholder = {'Search...'} value = {searchQuery} onChange={handlerInput}/>
            <button type = 'button' className = {style.searchButton} onClick={() => dispatch(searchActive())}>
                <SearchImg/>
            </button>
        </form>

    )
}
export default SearchMyPosts