import React, {useState} from "react";
import "../../FormsInReact/TodoApp/todo.css"
import Button from "../../ReactProps-States/button";
const PaginateInput = (props)=>{
    const [resultVal, setResultVal] = useState()
    const [clicked, setClicked]=useState(false)
    const handleChange = (e)=>{
        setResultVal(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        props.pageResult(resultVal)
    }
    const handleClicked=()=>{
        setClicked(!clicked)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={resultVal} onChange={handleChange}/>
                <Button className="disabledd" text="search users" clicks={handleClicked}/>
            </form>
        </>
    )
}
export default PaginateInput;
