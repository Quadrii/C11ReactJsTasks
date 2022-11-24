// import React, {useState} from "react";
// const EditTodoForm = (props)=>{
//     const [newTask, setNewTask] = useState(props.task)
//     const handleEditChange = (e) => {
//         setNewTask(e.target.value)
//     }
//     const handelEditSubmit = (e)=>{
//         e.preventDefault()
//         props.updated(props.id, newTask)
//         setNewTask("")
//         setIsEditing(!isEditing)
//     }
//
//     return (
//         <>
//             <form onSubmit={handelEditSubmit}>
//                 <input name="edit" value={newTask} onChange={handleEditChange}/>
//                 <button type="submit">Save</button>
//             </form>
//         </>
//     )
// }
// export default EditTodoForm;