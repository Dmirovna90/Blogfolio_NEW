import { useNavigate } from "react-router-dom";
import style from './CardPostMiddle.module.scss';
import {ReactComponent as Up} from '../../../assets/up.svg';
import {ReactComponent as Down} from '../../../assets/down.svg';
import {ReactComponent as Bookmark} from '../../../assets/bookmark.svg';
import {ReactComponent as More} from '../../../assets/more.svg';
import PopUp from "../../PopUp/PopUp";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavorite } from "../../../store/postsSlice";

interface IPost {
    id: number;
    image?: string;
    date: string;
    title: string;
    text?: string;
    index?: number;
    isFavorite?: boolean;
}
const CardPostMiddle = ({date, title, image, id}: IPost) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [popUpActive, setPopUpActive] = useState(false);
    const {isFavorite} = useSelector((state) => state.posts);
    return (<>
        <div className = {style.wrapper}>
            <div className = {style.wrapimg} onClick = {() => setPopUpActive(true)}>
                <img className = {style.imgCard} src={image} ></img>
            </div>
            <div className = {style.wraptextcontent}>
                <p className = {style.date}>{date}</p>
                <h2 className = {style.title} onClick = {() => navigate(`/${id}`)} >{title}</h2>
            </div>
            <div className = {style.wrap}>
                <div className = {style.icons}><Up className = {style.icon} /><Down /></div>
                <div className = {style.icons}><button className = {style.iconBtn} type = 'button' onClick={() => {dispatch(getFavorite({isFavorite}))}}><Bookmark className = {style.icon}/></button ><button className = {style.iconBtn}><More /></button></div>
            </div>
        </div>
        <PopUp open = {popUpActive} setOpen = {setPopUpActive}>
            <div className = {style.popup_wraping}>
                <img className = {style.imgCard} src={image} ></img>
                </div>
        </PopUp>
        </>
    )
}
export default CardPostMiddle