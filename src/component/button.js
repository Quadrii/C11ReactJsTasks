import React from "react";
const IncreaseCounter = (props) => {
   return (
       <div>
           <button onClick={props.onClick}>{props.text}</button>
       </div>
   )
}
export default IncreaseCounter;