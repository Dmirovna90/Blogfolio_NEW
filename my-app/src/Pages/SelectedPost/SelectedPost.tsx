import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from './SelectedPost.module.scss';
import {ReactComponent as Up} from '../../assets/up.svg';
import {ReactComponent as Down} from '../../assets/down.svg';
import {ReactComponent as Bookmark} from '../../assets/bookmark.svg';
import {ReactComponent as Prev} from '../../assets/prev.svg';
import {ReactComponent as Next} from '../../assets/next.svg';

const SelectedPost = () => {
    const [result, setResult] = useState({title: '', image: '', description: ''})
    const navigate = useNavigate();
    const path = useParams()
    useEffect (() => {
        fetch(`https://studapi.teachmeskills.by/blog/posts/${path.result}`)
        .then((response) => response.json())
        .then((json) => setResult((json)))
    },[]);

    // console.log(result.title)
    return (
        <div className = {style.container}>
            <div className = {style.crumbs}>
               <button className = {style.btnHome} onClick = {() => navigate('/')}>Home</button>
               <button className = {style.btnPost} onClick = {() => navigate('')}>Post {path.result}</button>
            </div>      
            <h1 className = {style.postTitle}>{result.title}</h1>
            <div className = {style.postImgWrap}>
                <img className = {style.postImg} src={result.image}></img>
            </div>
            <div className = {style.postTextWrap}>
                <p className = {style.postText}>{result.description}</p>
            </div>
            <div className = {style.wrap}>
                <div className = {style.icons}>
                    <div className = {style.iconWrap}>
                        <Up className = {style.icon} />
                    </div>
                    <div className = {style.iconWrap}>
                        <Down />
                    </div>            
                </div>
                <div className = {style.iconWrapAdd}>
                        <Bookmark className = {style.icon}/>
                        <span className = {style.add}>Add to favorites</span>
                </div>                    
            </div>
            <div className = {style.prevNextWrap}>
                <div className = {style.prevWrap}>
                    <div className = {style.arrowPrev}>
                        <Prev />
                    </div>
                    <div className = {style.prevDescription}>
                        <span className = {style.prev}>Prev</span>
                        <span className = {style.prevTitle}>8 Beautiful Villas Belonging to Artists You Need to See</span>
                    </div>
                </div>
                <div className = {style.prevWrap}>
                    <div className = {style.nextDescription}>
                        <span className = {style.next}>Next</span>
                        <span className = {style.prevTitle}>10 Things to Know About Salvador Dalí</span>
                    </div>
                    <div className = {style.arrowNext}>
                        <Next />
                    </div>
                </div>                
            </div>

            {/* <button onClick = {() => navigate(-1)}>Back</button> */}
        </div>
    )
}
export default SelectedPost