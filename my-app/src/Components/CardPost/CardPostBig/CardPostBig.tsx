import { useNavigate } from "react-router-dom";
import style from './CardPostBig.module.scss';
import {ReactComponent as Up} from '../../../assets/up.svg';
import {ReactComponent as Down} from '../../../assets/down.svg';
import {ReactComponent as Bookmark} from '../../../assets/bookmark.svg';
import {ReactComponent as More} from '../../../assets/more.svg';
import PopUp from "../../PopUp/PopUp";
import { useState } from "react";

interface IPost {
    id: number;
    image?: string;
    text: string;
    date: string;
    title: string;
}
const CardPostBig = ({date, title, text, image, id}: IPost) => {
    const navigate = useNavigate();
    const [popUpActive, setPopUpActive] = useState(false);
    return (<>
        <div className = {style.wrapper}>
            <div className = {style.wrap}>
                <div className = {style.wraptextcontent}>
                    <p className = {style.date}>{date}</p>
                    <h2 className = {style.title} onClick = {() => navigate(`${id}`)} >{title}</h2>
                    <p className = {style.text}>{text}</p>
                </div>
                <div className = {style.wrapimg} onClick = {() => setPopUpActive(true)}>
                    <img className = {style.imgCard} src={image}></img>
                </div>
            </div>
            <div className = {style.wrap}>
                <div className = {style.icons}><Up className = {style.icon} /><Down /></div>
                <div className = {style.icons}><Bookmark className = {style.icon}/><More /></div>
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
export default CardPostBig