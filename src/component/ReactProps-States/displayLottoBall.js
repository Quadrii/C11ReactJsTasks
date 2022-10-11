import React from "react";
import '../css/style.css';
const DisplayLottoBall = (props) => {
    return (
        <>
            <h4 className="lottoBalls">Lotto: {props.title}</h4>
            <p>
                {props.num}
            </p>
        </>
    )
}
export default DisplayLottoBall;