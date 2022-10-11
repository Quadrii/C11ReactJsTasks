import React from "react";
const DisplayCoin = (props)=>{
    return(
        <>
            <div>
                <p>{props.coin}</p>
                <p>You've flipped the coin {props.nflips} times</p>
            </div>
        </>
    )
}
export default DisplayCoin;
