import React, {useState} from "react";
import Dice from "./dice";
import Button from "./button";
const RollDice = () => {
    const [dieRoll, setDieRoll] = useState("one");
    const [dieRoll1, setDieRoll1] = useState("two");
    const [isRolling, setIsRolling] = useState(false)
    const die = ["one", "two","three", "four", "five", "six"];
    const handleDice = () => {
        const dieNum = die[Math.floor(Math.random()*die.length)];
        const dieNums = die[Math.floor(Math.random()*die.length)];
        setDieRoll(dieNum)
        setDieRoll1(dieNums)
        setIsRolling(true)

        setTimeout(() => {
            setIsRolling(false)
        }, 1000)
    }
    let equalDice = dieRoll1 === dieRoll ? "You rolled an equal die" : "Continue rolling"
    return (
        <>
            <Dice dieface={dieRoll} />
            <Dice dieface={dieRoll1} />
            <p>{equalDice}</p>
            <Button clicks={handleDice}
                    text={`${!isRolling ? "roll dice" : "rolling"}`}
                    disabled={isRolling}
            />
        </>
    )
}
export default RollDice;
