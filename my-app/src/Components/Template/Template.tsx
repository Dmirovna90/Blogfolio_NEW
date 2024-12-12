import { useNavigate } from "react-router-dom"
import Title from "../Title/Title";
import style from './Template.module.scss';
import { useSelector } from "react-redux";
import { Fragment, useEffect } from "react";

const Template = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className = {style.templateHeader}>
                <button className = {style.button} onClick = {() => navigate('/')}>Back to Home</button>
                <Title title = {props.title}/>
            </div>
            <div className = {style.templateBody}>
                {props?.inputA}
                {props?.inputB}
                {props?.inputC}
                {props?.inputD}
                {props?.inputE}
                {props?.textB}
                {props?.button}
                <p className = {style.text}>{props?.text} <span className = {style.link}>{props?.link}</span>{props?.textA}</p>
                {props?.buttonA}

            </div>
        </>
    )
}
export default Template