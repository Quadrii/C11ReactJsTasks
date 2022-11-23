import React, {useContext, useState} from "react";
import Button from "../../ReactProps-States/button";
import './todo.css';
import {TodoContext} from "./context/todoContext";
const DisplayTasks = (props)=>{
    const {updatedTodo, deletedTask, toggleComplete} = useContext(TodoContext);
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
        updatedTodo(props.id, newTask)
        setNewTask("")
        setIsEditing(!isEditing)
    }
    const handleDelete = ()=>{
        deletedTask(props.id)
    }

    const handleToggle = () => {
        toggleComplete(props.id)
    }
    const handleToggleChange = (e)=>{
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
                        <input type="checkbox" title="completed" onChange={handleToggleChange} onClick={handleToggle}/>
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
export default DisplayTasks;