import React, {useState} from "react";
import Button from "../ReactProps-States/button";
import {createPortal}  from "react-dom";
import Modal from "./modal";
const DisplayModal = ()=>{
    const [open, setOpen]= useState(false)
    const handleModalOPen =()=>{
        setOpen(true)
    }
    const handleModalClose=()=>{
        setOpen(false)
    }
    return (
        <>
            <Button text="open modal" clicks={handleModalOPen}/>
            {createPortal(
                <Modal open={open} setOpen={setOpen} closeOnClick>
                    <h1>working on React portal</h1>
                    <Button text="close modal" clicks={handleModalClose}/>
                </Modal>, document.querySelector("#modal")
            )
            }
        </>
    )
}
export default DisplayModal;
