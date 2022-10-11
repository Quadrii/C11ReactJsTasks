import React from "react";
const Machine = (props) => {
    let winner = props.symOne === props.symTwo && props.symTwo === props.symThree
    return (
        <div>
            <p>{props.symOne} {props.symTwo} {props.symThree}</p>
            <span className={winner ? "win" :  "lose"}>{winner ? "WINNER" : "Loser"}</span>
        </div>
    )
}
export default Machine;
