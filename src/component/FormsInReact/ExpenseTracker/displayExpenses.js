import React from "react";
const DisplayExpenses = (props)=>{
    return (
        <>
            <div>
                <strong>{props.item}</strong>
                <span>{props.quantity}</span>
                <p>{props.price}</p>
            </div>
        </>
    )
}
export default DisplayExpenses;