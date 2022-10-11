import React, {useState} from "react";
import DisplayLottoBall from "./displayLottoBall";
import Button from "./button";
import '../css/style.css';
const Lotto = () => {
    let rangeNum = [3,22,1,4,5,6];
    let [pickRandLottoNum, setPickRandLottoNum]=useState(Array.from(rangeNum))
    const pickLotto = () => {
        setPickRandLottoNum(
            currtVal =>
            currtVal.map
                (pickBall =>
                Math.floor(
                    Math.random()
                    * 40
                )
                +1
            )
        )
    }
    return (
        <>
            {pickRandLottoNum.map( picknums =>
                <DisplayLottoBall title="Lottery ball" num={picknums}/>
            )}
            <Button clicks={pickLotto} text="generate Lotto Num"/>
        </>
    )
}
export default Lotto;

