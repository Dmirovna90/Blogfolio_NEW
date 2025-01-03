import { useNavigate } from "react-router-dom"
import Title from "../Title/Title";
import style from './Template.module.scss';
import { useSelector } from "react-redux";
import { Fragment, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect } from "react";

const Template = (props: { title: string | undefined; children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className = {style.templateHeader}>
                <button className = {style.button} onClick = {() => navigate('/')}>Back to Home</button>
                <Title title = {props.title}/>
            </div>
            <div className = {style.templateBody}>
                {props.children}
            </div>
        </>
    )
}
export default Template