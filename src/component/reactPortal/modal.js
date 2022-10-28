import React, {useEffect, useRef} from "react";
const Modal = (props)=>{
    const dialogRef = useRef()
    const lastActiveElement = useRef()
    useEffect(()=>{
        if (props.open){
            lastActiveElement.current=document.activeElement
            dialogRef.current?.showModal()
        }else {
            dialogRef.current?.close()
            lastActiveElement.current?.focus()
        }
    }, [props.open])

    useEffect(()=>{
        const handleCancel = (e)=>{
            e.preventDefault()
            props.setOpen(false)
        }
        dialogRef.current?.addEventListener("cancel", handleCancel)
        return ()=>{
            dialogRef.current?.removeEventListener("cancel", handleCancel)
        }
    }, [props.setOpen])

    const handleClosed = (e)=>{
        if (props.closeOnClick && e.target === dialogRef.current){
           props.setOpen(false);
        }
    }

    return (
        <>
            <dialog ref={dialogRef} onClick={handleClosed}>
                {props.children}
            </dialog>
        </>
    )
}
export default Modal;