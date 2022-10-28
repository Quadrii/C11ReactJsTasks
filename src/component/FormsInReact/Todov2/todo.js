import React, {useState} from "react";
import uuid from "react-uuid";
import DisplayTasks from "./displayTasks";
import AddNewTodo from "./addNewTodo";
const Todo =  ()=>{
    const todos = [
        {
            id:uuid(),
            myTask:"write react",
            completed:false
        },
        {
            id:uuid(),
            myTask: "write angular",
            completed: false
        }
    ]
    const [initialsTasks, setInitialsTasks] = useState(todos);
    const updatedTodo = (id, update)=> {
       let updatedTask = initialsTasks.map(initial=>
       {
               if(initial.id === id){
                   return {...initial, myTask: update}
               }
               else {
                   return  initial;
               }
        }

       )
       setInitialsTasks(updatedTask)
    }

    const deletedTask = (id)=>{
        let deleteFunc = initialsTasks.filter(initial=>
            initial.id !== id
        )
        setInitialsTasks(deleteFunc)
    }
    const addNewTodo = (task)=>{
        let newTask = {...task, id:uuid()}
        let copied = [newTask, ...todos]
        setInitialsTasks(copied)
    }
    return (
        <>
            {initialsTasks.map(todo =>
                <DisplayTasks id={todo.id} task={todo.myTask} updated={updatedTodo} deleteTask={deletedTask}/>
            )}
            <AddNewTodo addNewChore={addNewTodo}/>
        </>
    )
}
export default Todo;