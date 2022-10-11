import React, {useState} from "react";
import DisplayFormBox from "./displayFormBox";
import uuid from 'react-uuid';
import FormBox from "./formBox";
const Boxx = ()=>{
    const boxes = [
        {
            id:uuid(),
            height:20,
            width:20,
            color:"blue"
        }
    ]
    const [initialBox, setInitialBox] = useState(boxes)
    const addBox = (newBox)=>{
        let createIt = [...boxes, newBox]
        setInitialBox(createIt)
    }
    const remove =(id)=>{
      let filteredBox = initialBox.filter(box=> box.id !== id)
        setInitialBox(filteredBox)
    }

    return (
        <>
            <ul>
                {initialBox.map(box=>
                    <DisplayFormBox id={box.id} key={box.id} heightVal={box.height} widthVal={box.width} color={box.color} removeBox={remove}/>
                )}

            </ul>
            <FormBox createBox={addBox}/>
        </>
    )
}
export default Boxx;
