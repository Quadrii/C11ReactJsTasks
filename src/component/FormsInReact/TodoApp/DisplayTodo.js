import React, {useState} from "react";
import Button from "../../ReactProps-States/button";
import "./todo.css";
const DisplayTodo = (props)=>{
    const [isEditing, setIsEditing] = useState(false);
    const [editTask, setEditTask] = useState(props.task);

    const toggleEdit = () => {
        setIsEditing(true)
    }
    const handleUpdate = (e)=>{
        e.preventDefault();
        props.updateTodo(props.id, editTask)
        setEditTask("")
        setIsEditing(false)
    }
    const handleDelete= ()=>{
        props.removeTodo(props.id);
    }
    const handleEditChange = (e)=>{
        setEditTask(e.target.value)
    }
    const handleToggle = () => {
        props.isComplete(props.id)
    }
    const render = ()=>{
        let result;
        if (isEditing){
            result = (
                <div>
                    <form onSubmit={handleUpdate}>
                        <input value={editTask} name="task" onChange={handleEditChange} autoFocus/>
                        <button type="submit">Edit Task</button>
                    </form>
                </div>
            )
        }
        else {
            result =(
                <li>
                    <span className={props.completed ? "completed" : " "}>
                        {props.task}
                    </span>
                    <Button clicks={handleToggle} text="completed"/>
                    <Button clicks={toggleEdit} text="Edit"/>
                    <Button clicks={handleDelete} text="Delete"/>
                </li>
            )
        }
        return result
    }
    return (
        <>
            {render()}
        </>
    )
}
export default DisplayTodo;
