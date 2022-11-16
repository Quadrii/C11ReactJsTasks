import React, {useState} from "react";
import uuid from "react-uuid";
import DisplayTasks from "./displayTasks";
import AddNewTodo from "./addNewTodo";
import UseTodoState from "./useTodoState";
import useTodoState from "./useTodoState";
const Todo =  ()=>{
    const todos = [
        {
            id:uuid(),
            myTask:"write reactjs",
            completed:false
        },
        {
            id:uuid(),
            myTask: "write angular",
            completed: false
        }
    ]
    const {initials, updatedTodo, deletedTask, addNewTodo}=useTodoState(todos)
    return (
        <>
            {initials.map(todo =>
                <DisplayTasks id={todo.id} task={todo.myTask} updated={updatedTodo} deleteTask={deletedTask}/>
            )}
            <AddNewTodo addNewChore={addNewTodo}/>
        </>
    )
}
export default Todo;