import React, {useState} from "react";
import Button from "../../ReactProps-States/button";
const DisplayTasks = (props)=>{
    const [isEditing, setIsEditing] = useState(false)
    const [newTask, setNewTask] = useState(props.task)
    const handleEdit = ()=>{
        setIsEditing(!isEditing)
    }
    const handleEditChange = (e) => {
        setNewTask(e.target.value)
    }
    const handelEditSubmit = (e)=>{
        e.preventDefault()
        props.updated(props.id, newTask)
        setNewTask("")
        setIsEditing(!isEditing)
    }
    const handleDelete = ()=>{
        props.deleteTask(props.id)
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
                        {props.task}
                        <Button clicks={handleEdit} text="Edit"/>
                        <Button clicks={handleDelete} text="Delete"/>
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