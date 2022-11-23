import React, {useContext} from "react";
import DisplayTasks from "./displayTasks";
import AddNewTodo from "./addNewTodo";
import {TodoContext} from "./context/todoContext";
const Todo =  ()=>{
    const {initials} = useContext(TodoContext)
    return (
        <>
            {initials.map(todo =>
                    <DisplayTasks id={todo.id} task={todo.myTask} completed={todo.completed}/>
                )}
            <AddNewTodo/>
        </>
    )
}
export default Todo;