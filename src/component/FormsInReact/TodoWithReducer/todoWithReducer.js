import React, {useContext} from "react";
import DisplayTodo from "./displayTodo";
import AddNewTodo from "./addNewTodo";
import {TodoContext} from "./contexts/todoContext";
const TodoWithReducer =  ()=>{
    const initials = useContext(TodoContext)
    return (
        <>
            {initials.map(todo =>
                <DisplayTodo id={todo.id} task={todo.myTask} completed={todo.completed}/>
            )}
            <AddNewTodo/>
        </>
    )
}
export default TodoWithReducer;