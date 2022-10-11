import React from "react";
const Dice = (props)=>{
    return (
        <>
            <div>
                <i className={`fa-solid fa-dice-${props.dieface}`}></i>
            </div>
        </>
    )
}
export default Dice;