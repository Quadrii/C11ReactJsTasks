import React from "react";
const DisplayItem = (props)=>{
    return(
        <>
            <li>{props.name}</li>
            <li>{props.quantity}</li>
        </>
    )
}
export default DisplayItem;