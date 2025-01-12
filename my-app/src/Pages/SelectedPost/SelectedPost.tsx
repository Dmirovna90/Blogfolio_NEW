import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from './SelectedPost.module.scss';
import {ReactComponent as Up} from '../../assets/up.svg';
import {ReactComponent as Down} from '../../assets/down.svg';
import {ReactComponent as Bookmark} from '../../assets/bookmark.svg';
import {ReactComponent as Prev} from '../../assets/prev.svg';
import {ReactComponent as Next} from '../../assets/next.svg';
import { useDispatch, useSelector } from "react-redux";
import { getPostInfo } from "../../store/selectedPostSlice";

const SelectedPost = () => {
    const navigate = useNavigate();
    const {postInfo, loading, error} = useSelector((state) => state.post);
    const {id} = useParams()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPostInfo({id}))
    }, [id]);
    if(loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error</div>
    }
    return (
        <div className = {style.container}>
            <div className = {style.crumbs}>
               <button className = {style.btnHome} onClick = {() => navigate('/')}>Home</button>
               <button className = {style.btnPost} onClick = {() => navigate('')}>Post {id}</button>
            </div>
                
            <h1 className = {style.postTitle}>{postInfo.title}</h1>
            <div className = {style.postImgWrap}>
                <img className = {style.postImg} src = {postInfo.image}></img>
            </div>
            <div className = {style.postTextWrap}>
                <p className = {style.postText}>{postInfo.text}</p>
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
                    <button className = {style.arrowPrev} onClick = {() => navigate(`/${postInfo.id-1}`)}>
                        <Prev />
                    </button>
                    <div className = {style.prevDescription}>
                        <span className = {style.prev}>Prev</span>
                    </div>
                </div>
                <div className = {style.prevWrap}>
                    <div className = {style.nextDescription}>
                        <span className = {style.next}>Next</span>
                    </div>
                    <button className = {style.arrowNext} onClick = {() => navigate(`/${postInfo.id+1}`)}>
                        <Next />
                    </button>
                </div>                
            </div>
        </div>
    )
}
export default SelectedPost