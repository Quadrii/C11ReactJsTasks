import React from "react";
const ShowCards = (props)=>{
    return (
        <>
            <div>
                <img src={props.image}/>
                <p>{props.name}</p>
            </div>
        </>
    )
}
export default ShowCards;