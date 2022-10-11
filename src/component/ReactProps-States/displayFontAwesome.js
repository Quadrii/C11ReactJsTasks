import React from "react";
const DisplayFontAwesome = (props)=>{
    return (
        <>
            <i className={`fas fa ${props.name}`}></i>
        </>
    )
}
export default DisplayFontAwesome;