import React, { useEffect, useState } from "react";
import CardPostMiddle from "../../Components/CardPost/CardPostMiddle/CardPostMiddle";
import CardPostSmall from "../../Components/CardPost/CardPostSmall/CardPostSmall";
import Title from "../../Components/Title/Title";
import style from './AllPosts.module.scss'
import Tabs from "../../Components/Tabs/Tabs";
import {ReactComponent as Prev} from "../../assets/prev.svg";
import {ReactComponent as Next} from "../../assets/next.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, setOrdering, setPage, setSearchQuery } from "../../store/postsSlice";
import { useNavigate } from "react-router-dom";
interface IPost {
    id: number;
    image?: string;
    text?: string;
    date: string;
    title: string;
    index: number;
}
const AllPosts = () => {
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();
    const {posts, loading, error, currentPage, itemsPerPage, totalItems, searchQuery, ordering} = useSelector((state) => state.posts);
    useEffect (() => {
        dispatch(fetchPosts({
            limit: itemsPerPage,
            offset: (currentPage - 1) * itemsPerPage,
            searchQuery: searchQuery,
            ordering: ordering,
        }))
    },[currentPage, ordering]);
    if(loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error</div>
    }
    const handlerPageChange = (pageNumber: number) => {
        dispatch(setPage(pageNumber))
    }
    const handlerSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(fetchPosts>({
            limit: itemsPerPage,
            offset: 0,
            searchQuery: searchQuery,
            ordering: ordering,
        }));
        dispatch(setPage(1))
    }
    const handlerInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target
        dispatch(setSearchQuery(value))
    }
    const handlerPrev = () => {
        if(currentPage > 1)
        dispatch(setPage(currentPage - 1))
    }
    const handlerNext = () => {
        if(currentPage < totalPage)
        dispatch(setPage(currentPage + 1))
    }
    const handlerOrdering = (e:React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setOrdering(e.target.value))
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
    return (
        <>
        <div className = {style.container}>
            <Title title = 'Blog' />
            <Tabs/>
            <div className = {style.postsWrap}>
                <div className = {style.middlePostWrap}>
                    {posts.map(({id, image, date, text, title, index}: IPost) => {
                        return (
                        <div key={id}>
                        <CardPostMiddle id ={id} image ={image} date = {date} title = {title} />
                        </div>)
                    })}
                </div>
                <div className = {style.smallPostWrap}>
                    {posts.map(({id, image, date, text, title, index}: IPost) => {
                        return (
                        <div key={id}>
                        <CardPostSmall id ={id} image ={image} date = {date} title = {title}/>
                </div>)
            })}
                </div>
            </div>
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
        </div>
    </>
    )
}
export default AllPosts


