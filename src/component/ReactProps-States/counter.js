import React, {useState} from "react";
import Button from "./button";
const Counter = (props) => {
    const [count, setCount] = useState(0);
    const increaseCounter = () => {
        setCount(count+props.step)
    }
    const resetButton = () => {
        setCount(0)
    }

    const decreaseCounter = ()=>{
        if (count > 0){
            setCount(count-1)
        }else {
            setCount(0)
        }
    }
    return (
        <div>
            <p>The number is {count}</p>
            <Button clicks={increaseCounter} text="set count"></Button>
            <Button clicks={decreaseCounter} text="reduce count"></Button>
            <Button clicks={resetButton} text="reset Count"></Button>
        </div>
    )
}

export default Counter;