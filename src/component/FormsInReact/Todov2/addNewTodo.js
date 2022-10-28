import React, {useState} from "react";
import uuid from "react-uuid";
const AddNewTodo = (props)=>{
    const [newTodo, setNewTodo] = useState("")
    const handleNewTodo = (e)=>{
        setNewTodo(e.target.value)
    }
    const handleNewTodoForm = (e)=>{
        e.preventDefault()
        props.addNewChore({id:uuid(), completed:false, myTask: newTodo})
        setNewTodo("")
    }
    return (
        <>
            <form onSubmit={handleNewTodoForm}>
                <input name="newTodo" value={newTodo} onChange={handleNewTodo}/>
                <button type="submit">Add task</button>
            </form>
        </>
    )
}
export default AddNewTodo;