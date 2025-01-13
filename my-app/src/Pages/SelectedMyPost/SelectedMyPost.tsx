import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyPosts, selectPost } from "../../store/myPostsSlice";
import style from './SelectedMyPost.module.scss';
import Title from "../../Components/Title/Title";
import CardPostMiddle from "../../Components/CardPost/CardPostMiddle/CardPostMiddle";
import { useNavigate, useParams } from "react-router-dom";
import { setPage } from "../../store/myPostsSlice";
import {ReactComponent as Prev} from '../../assets/prev.svg';
import {ReactComponent as Next} from '../../assets/next.svg';
interface IPost {
  id: number;
  image?: string;
  text?: string;
  date: string;
  title: string;
  index: number;
}
const SelectedMyPost = () => {
    const dispatch = useDispatch();
    const data = useParams();
    const {myPosts, isLoading, currentPage, itemsPerPage, totalItems, select, post} = useSelector((state) => state.myPosts);
        
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getMyPosts({
          limit: itemsPerPage,
          offset: (currentPage - 1) * itemsPerPage,
          path: data,
        }));
    }, []);
    
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
              style={{ color: i === currentPage ? "#2231AA" : "#313037" }}
              className = {style.page}
              key={i}
              onClick={() => handlerPageChange(i)}>
              {i}
            </button>
          )
      };
      return pageNumber;
    } 
    return(
        <div className = {style.container}>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <div className = {style.crumbs}>
               <button className = {style.btnHome} onClick = {() => navigate('/')}>Home</button>
            </div>  
            <div>
                {myPosts.map(() => {
                return (
                    <div key = {myPosts.id}>
                      <Title title = {myPosts.title}/>
                        <h1>{myPosts.title}</h1>
                        <div><img src={myPosts.image}></img></div>
                    </div>
                    

                )})}
            </div>
                    
            {/* <div className = {style.middlePostWrap}>
                {myPosts.map(({id, image, date, text, title}: IPost) => {
                  return (
                    <div key={id}>
                      <CardPostMiddle id ={id} image ={image} date = {date} title = {title} />
                    </div>)
                  })}
            </div> */}
            <div className = {style.prevNextWrap}>
                <div className = {style.prevWrap}>
                    <div className = {style.arrowPrev}>
                        <Prev onClick = {handlerPrev} disabled = {currentPage === 1}/>
                    </div>
                    <div className = {style.prevDescription}>
                        <span className = {style.prev}>Prev</span>
                    </div>
                </div>
                <div className = {style.pageNumbers}>
                    {renderPageNumber()}
                </div>
                <div className = {style.prevWrap}>
                    <div className = {style.nextDescription}>
                        <span className = {style.next}>Next</span>
                    </div>
                    <div className = {style.arrowNext}>
                        <Next onClick = {handlerNext} disabled = {currentPage === totalPage}/>
                    </div>
                </div>                
            </div>
          </>
        )}
      </div>
    )
};
export default SelectedMyPost;
