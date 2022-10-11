import React from "react";
import '../css/color.css';
const ColorBoxes = (props) => {
    return (
        <>
            <p className="the_classes"
               style={{backgroundColor: props.backColor}}
               onClick={props.clicks}>
            </p>
        </>
    )
}
export default ColorBoxes;
