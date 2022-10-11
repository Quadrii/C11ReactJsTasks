import React from "react";
const Button = (props) => {
   return (
           <button onClick={props.clicks}>{props.text}</button>
   )
}
export default Button;