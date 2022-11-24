import React, {useContext, useState} from "react";
import uuid from "react-uuid";
import {DispatchContext} from "./contexts/todoContext";

const AddNewTodo = ()=>{
    const dispatch = useContext(DispatchContext);
    const [newTodo, setNewTodo] = useState("")
    const handleNewTodo = (e)=>{
        setNewTodo(e.target.value)
    }
    const handleNewTodoForm = (e)=>{
        e.preventDefault()
        dispatch({type:"ADDTODO", newTask: newTodo})
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