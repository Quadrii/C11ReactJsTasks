import React, {useState} from "react";
const FormElement = () => {
    const [inputVal, setInputVal] = useState("Tolu")
    const handleInputChange = (event)=>{
        setInputVal(event.target.value)
    }
    const handleInput = (event)=>{
        event.preventDefault()
        setInputVal(event.target.value)
    }
    return (
        <>
            <form onSubmit={handleInput}>
                <input value={inputVal} onChange={handleInputChange}/> <br/>
                <button type="submit">Testing</button>
            </form>
            {inputVal}
        </>
    )
}
export default FormElement;

