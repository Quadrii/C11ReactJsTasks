import React, {useState} from "react";
import uuid from "react-uuid";
const AddTodoForm = (props)=>{
    const[todoTask, setTodoTask] = useState();

    const handleTaskChange = (e)=> {
        setTodoTask(e.target.value)
    }
    const handleTaskSubmit = (e)=>{
        e.preventDefault()
        props.addATask({task: todoTask, id:uuid(), completed:false});
        setTodoTask("")
    }
    return (
        <>
            <form onSubmit={handleTaskSubmit}>
                <input onChange={handleTaskChange} value={todoTask} name="task"/>
                <button type="submit">Add Task</button>
            </form>
        </>
    )
}
export default AddTodoForm;
