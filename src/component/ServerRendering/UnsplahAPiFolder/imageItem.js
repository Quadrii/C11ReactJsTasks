import React from "react";
import './imgStyle.css';
const ImageItem = (props)=>{
    return (
        <>
            <img src={props.imgSrc} alt={props.imgAlt}/>
        </>
    )
}
export default ImageItem;
