import React, {useState} from "react";
const Form = ()=>{
    const [inputVal, setInputVal] = useState();
    const handleChange = (evt)=>{
        setInputVal(evt.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setInputVal(null)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={inputVal}/>
                <button type="submit ">submit</button>
            </form>
            {inputVal}
        </>
    )
}
export default Form;