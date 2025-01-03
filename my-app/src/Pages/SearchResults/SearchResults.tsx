import style from './SearchResults.module.scss';
import Title from '../../Components/Title/Title';
import { useState, useEffect } from 'react';
import CardPostSearch from '../../Components/CardPost/CardPostSearch/CardPostSearch';
import {ReactComponent as Prev} from '../../assets/prev.svg';
import {ReactComponent as Next} from '../../assets/next.svg';

interface IPost {
    id: number;
    image?: string;
    text?: string;
    date: string;
    title: string;
}

const SearchResults = () => {
    const [results, setPosts] = useState([]);
    useEffect (() => {
        fetch('https://studapi.teachmeskills.by/blog/posts/?author__course_group=14&format=json&limit=9')
        .then((response) => response.json())
        .then((json) => setPosts((json.results)))
    },[])
    return (
        <div className = {style.container}>
            <Title title = 'Search results ‘Astronauts’' />
            <div className = {style.postsWrap}>
                <div className = {style.middlePostWrap}>
                    {results.map(({id, image, date, text, title}: IPost) => {
                        return (
                        <div key={id}>
                        <CardPostSearch id ={id} image ={image} date = {date} title = {title}/>
                        </div>)
                    })}
                </div>
            </div>
            <div className = {style.prevNextWrap}>
                <div className = {style.prevWrap}>
                    <div className = {style.arrowPrev}>
                        <Prev />
                    </div>
                    <div className = {style.prevDescription}>
                        <span className = {style.prev}>Prev</span>
                    </div>
                </div>
                <div className = {style.pageNumbers}>
                    <span>1  2   3   ...   6</span>
                </div>
                <div className = {style.prevWrap}>
                    <div className = {style.nextDescription}>
                        <span className = {style.next}>Next</span>
                    </div>
                    <div className = {style.arrowNext}>
                        <Next />
                    </div>
                </div>                
            </div>
        </div>
    )
}
export default SearchResults