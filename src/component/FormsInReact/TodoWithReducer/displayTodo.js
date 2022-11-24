import React, {useContext, useState} from "react";
import Button from "../../ReactProps-States/button";
import './todo.css';
import {DispatchContext} from "./contexts/todoContext";
const DisplayTodo = (props)=>{
    const dispatch = useContext(DispatchContext);
    const [isEditing, setIsEditing] = useState(false);
    const [newTask, setNewTask] = useState(props.task);
    const [completed, setCompleted] = useState(false);

    const handleEdit = ()=>{
        setIsEditing(!isEditing)
    }
    const handleEditChange = (e) => {
        setNewTask(e.target.value)
    }
    const handelEditSubmit = (e)=>{
        e.preventDefault()
        dispatch({type:"EDIT", id:props.id, updatedTask:newTask})
        setNewTask("")
        setIsEditing(!isEditing)
    }
    const handleDelete = ()=>{
        dispatch({type:"REMOVE", id:props.id})
    }

    const handleToggle = () => {
        dispatch({type:"TOGGLE", id:props.id})
    }
    const handleTogglChange = (e)=>{
        setCompleted(e.target.check)
    }
    const render = ()=>{
        let display;
        if (isEditing){
            display = (
                <form onSubmit={handelEditSubmit}>
                    <input name="edit" value={newTask} onChange={handleEditChange}/>
                    <button type="submit">Save</button>
                </form>
            )
        }else {
            display = (
                <li>
                    <div>
                        <p className={props.completed ? "completed" : ""}>{props.task}</p>
                        <Button clicks={handleEdit} text="Edit"/>
                        <Button clicks={handleDelete} text="Delete"/>
                        <input type="checkbox" title="completed" onChange={handleTogglChange} onClick={handleToggle}/>
                    </div>
                </li>
            )
        }
        return display;
    }
    return (
        <>
            {render()}
        </>
    )
}
export default DisplayTodo;