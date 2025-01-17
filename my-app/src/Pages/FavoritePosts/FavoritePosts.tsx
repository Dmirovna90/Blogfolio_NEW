import React, { useEffect, useState } from "react";
import CardPostMiddle from "../../Components/CardPost/CardPostMiddle/CardPostMiddle";
import CardPostSmall from "../../Components/CardPost/CardPostSmall/CardPostSmall";
import Title from "../../Components/Title/Title";
import style from './FavoritePosts.module.scss'
import Tabs from "../../Components/Tabs/Tabs";
import {ReactComponent as Prev} from "../../assets/prev.svg";
import {ReactComponent as Next} from "../../assets/next.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, getFavorite, setOrdering, setPage, setSearchQuery } from "../../store/postsSlice";

interface IPost {
    id: number;
    image?: string;
    text?: string;
    date: string;
    title: string;
    index: number;
    isFavorite?: boolean;
}
const FavoritePosts = () => {
    const dispatch = useDispatch<any>();
    const {favorites, favorite, loading, error} = useSelector((state) => state.favorites);
    const {posts, isFavorite} = useSelector((state) => state.posts);
    console.log(favorites)
    useEffect (() => {
        dispatch(fetchPosts(favorites))
    },[isFavorite]);
    if(loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error</div>
    }
    const renderFavorite = favorites.map(() => {
        return (
            <div key = {favorite.id}>
                <div>{favorite.id}</div>
                <div>{favorite.title}</div>
            </div>
        )    
    })

    return (
        <div>
            {favorites.length === 0 ? <div>no favorites posts</div> :
            (renderFavorite())}
            
        </div>
    )
}
export default FavoritePosts


