import React, {useState} from "react";
import ColorBoxes from "./colorBoxes";
const Box = ()=>{
    const colors = ["purple", "green", "black", "indigo", "pink", "brown"]
    const [backCol, setBackCol]= useState("blue");
    const changeBackColor= () => {
        let randBackColor = colors[Math.floor(Math.random()*colors.length)]
        setBackCol(randBackColor)
    }
    return (
        <>
            <div>
                <ColorBoxes backColor={backCol} clicks={changeBackColor}/>
            </div>
        </>
    )
}
export default Box;
