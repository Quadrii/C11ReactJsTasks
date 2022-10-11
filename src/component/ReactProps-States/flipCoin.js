import React, {useState} from "react";
import Button from "./button";
import DisplayCoin from "./displayCoin";
const FlipCoin=()=>{
    const flips = ["head", "tail"]
    const [currentFlip, setCurrentFlip] = useState(null)
    const [flipCount, setFlipCount]= useState(0)
    const [numHead, setNumHead] = useState(0)
    const [numTail, setNumTail] = useState(0)
    const handleFlips = () => {
         let randFlip =flips[Math.floor(Math.random()*flips.length)]
        setCurrentFlip(randFlip)
        setFlipCount(flips => flips + 1)
        if (currentFlip === "head"){
            setNumHead(numHead + 1)
        }else{
            setNumTail(numTail+ 1)
        }
    }

    return(
        <>
            <DisplayCoin coin={currentFlip} nflips={flipCount}/>
            <strong>num of head {numHead}</strong>
            <strong>num of Tail {numTail}</strong>
            <Button clicks={handleFlips} text="flipCoin"/>
        </>
    )
}
export default FlipCoin;
