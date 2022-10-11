import React, {useState} from "react";
import uuid from "react-uuid";
const FormBox = (props)=>{
    const [boxWidth, setBoxWidth] = useState();
    const [boxHeight, setBoxHeight] = useState();
    const [boxColor, setBoxColor] = useState();
    const handleHeightChange = (e)=>{
        setBoxHeight(e.target.value)
    }
    const handleWidthChange = (e)=>{
        setBoxWidth(e.target.value)
    }
    const handleColorChange = (e)=>{
        setBoxColor(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        props.createBox({height: boxHeight, width:boxWidth, color:boxColor, id:uuid()})
        setBoxColor("")
        setBoxHeight("")
        setBoxWidth("")
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="height" id="height" value={boxHeight} onChange={handleHeightChange}/>
                <input name="width" id="width" value={boxWidth} onChange={handleWidthChange}/>
                <input name="color" id="color" value={boxColor} onChange={handleColorChange}/>
                <button type="submit">Create Box</button>
            </form>
        </>
    )
}
export default FormBox;
