import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyPosts } from "../../store/myPostsSlice";
import style from './MyPosts.module.scss';
import Title from "../../Components/Title/Title";
import CardPostMiddle from "../../Components/CardPost/CardPostMiddle/CardPostMiddle";
import { useNavigate } from "react-router-dom";
import { setPage } from "../../store/myPostsSlice";
import {ReactComponent as Prev} from '../../assets/prev.svg';
import {ReactComponent as Next} from '../../assets/next.svg';
import { setOrdering, setSearchQuery } from "../../store/myPostsSlice";
interface IPost {
  id: number;
  image?: string;
  text?: string;
  date: string;
  title: string;
  index: number;
}
const MyPosts = () => {
    const dispatch = useDispatch<any>();
    const {myPosts, isLoading, currentPage, itemsPerPage, totalItems, searchQuery, ordering} = useSelector((state) => state.myPosts);
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getMyPosts({
          limit: itemsPerPage,
          offset: (currentPage - 1) * itemsPerPage,
          searchQuery: searchQuery,
          ordering: ordering,
        }))
    }, [currentPage, ordering]);
    const handlerPageChange = (pageNumber: number) => {
        dispatch(setPage(pageNumber))
    }
    const handlerPrev = () => {
        if(currentPage > 1)
        dispatch(setPage(currentPage - 1))
    }
    const handlerNext = () => {
        if(currentPage < totalPage)
        dispatch(setPage(currentPage + 1))
    }
    const totalPage = Math.ceil(totalItems/itemsPerPage)
    const renderPageNumber = () => {
      const pageNumber = [];
      const maxPageNumber = 10;
      const startPage = Math.max(currentPage - Math.floor(maxPageNumber/2), 1)
      const endPage = Math.min(startPage + maxPageNumber - 1, totalPage)
      for (let i = startPage; i <= endPage; i++) {
          pageNumber.push(
              <button
              style={{ color: i === currentPage && "#2231AA" }}
              className = {style.page}
              key={i}
              onClick={() => handlerPageChange(i)}>
              {i}
            </button>
          )
      };
      return pageNumber;
    };
    const handlerOrdering = (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setOrdering(e.target.value));
    };

    return(
        <div className = {style.container}>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <div className = {style.crumbs}>
               <button className = {style.btnHome} onClick = {() => navigate('/')}>Home</button>
            </div>  
            <Title title="My Posts"/>
            <div className = {style.wrap}>
              <div className = {style.ordering}>
                      <label>Order by:</label>
                      <select value = {ordering} onChange={handlerOrdering}>
                          <option value = {''}>default</option>
                          <option value = {'title'}>title</option>
                          <option value = {'date'}>date</option>
                          <option value = {'text'}>text</option>
                          <option value = {'lesson_num'}>lesson_num</option>                   
                      </select>
                </div>
              <div className = {style.middlePostWrap}>
                  {myPosts.map(({id, image, date, text, title}: IPost) => {
                    return (
                      <div key={id}>
                        <CardPostMiddle id ={id} image ={image} date = {date} title = {title} />
                      </div>)
                    })}
              </div>
            </div>
            <div className = {style.prevNextWrap}>
                <div className = {style.prevWrap} onClick = {handlerPrev} disabled = {currentPage === 1}>
                    <div className = {style.arrowPrev}>
                        <Prev />
                    </div>
                    <div className = {style.prevDescription}>
                        <span className = {style.prev}>Prev</span>
                    </div>
                </div>
                <div className = {style.pageNumbers}>
                    {renderPageNumber()}
                </div>
                <div className = {style.prevWrap} onClick = {handlerNext} disabled = {currentPage === totalPage}>
                    <div className = {style.nextDescription}>
                        <span className = {style.next}>Next</span>
                    </div>
                    <div className = {style.arrowNext}>
                        <Next />
                    </div>
                </div>                
            </div>
          </>
        )}
      </div>
    )
};
export default MyPosts;
