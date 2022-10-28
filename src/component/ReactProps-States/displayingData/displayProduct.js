import React from "react";
import Button from "../button";
const DisplayProduct = (props)=>{
    return (
        <>
            <li> <strong>product Name:</strong> {props.productName}</li>
            <span> <b>price: </b> {props.productPrice}</span>
            <Button text="Filter product"/>
        </>
    )
}
export default DisplayProduct;