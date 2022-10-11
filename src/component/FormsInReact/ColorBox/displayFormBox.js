import React from "react";
import Button from "../../ReactProps-States/button";
const DisplayFormBox = (props)=>{
    const handleRemove = ()=>{
        props.removeBox(props.id)
    }
    return (
        <>
            <div className="box" style={
                {
                    height: `${props.heightVal}px`,
                    width: `${props.widthVal}px`,
                    backgroundColor: props.color
                }
            }>
            </div>
            <Button clicks={handleRemove} text="remove box"/>
        </>
    )
}
export default DisplayFormBox;