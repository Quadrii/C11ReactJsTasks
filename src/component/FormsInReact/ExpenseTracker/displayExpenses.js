import React from "react";
import Button from "../../ReactProps-States/button";
const DisplayExpenses = (props)=>{
    const handleRemove = ()=>{
        props.removeItem(props.id)
    }
    return (
        <>
            <div className="exp-wrap">
                <p className="expInfo">Item Name: {props.item}</p>
                <p className="expInfo">Item Quantity: {props.quantity}</p>
                <p className="expInfo">Item Price: {props.price}</p>
                <Button clicks={handleRemove} text='remove item'/>
            </div>
        </>
    )
}
export default DisplayExpenses;
