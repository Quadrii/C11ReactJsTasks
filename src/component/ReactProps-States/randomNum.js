import React, {useState} from "react";
import Button from "./button";
const RandomNum = ()=>{
    const [rand, setRand]=useState(0)
    const getRandomNum = ()=>{
        let randNumber = Math.floor(Math.random()*10)
        setRand(randNumber)
    }
    return (
        <>
            <p>The number is: {rand}</p>
            {rand && 7 ? <h2> "You WIN" </h2> : <Button clicks={getRandomNum} text="Random Number"/>}
        </>
    )
}
export default RandomNum;