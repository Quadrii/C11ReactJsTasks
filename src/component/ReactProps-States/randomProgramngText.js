import React from "react";
const RandomProgramngText = (props) => {
    return (
        <div>
            <p>
                The new text is : {props.randomProgrammingText}
            </p>
            <p>
                It has {props.vote} vote
            </p>
            <strong>It has {props.total} votes in total</strong>
        </div>
    )
}
export default RandomProgramngText;