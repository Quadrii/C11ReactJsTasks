import React, {useState} from "react";
import uuid from "react-uuid";
import DisplayTodo from "./DisplayTodo";
import AddTodoForm from "./AddTodoForm";
const TodoList = ()=>{
    const todos = [
        {
            id:uuid(),
          task: "write React",
            completed:false
        }
    ]
    const [initialTodos, setInitialTodos] = useState(todos)

    const addNewTask = (newTask)=>{
        let newTodo = {...newTask, id:uuid()}
        let copyTodo = [...todos, newTodo]
        setInitialTodos(copyTodo)
    }


    const update=(id, updatedTask) => {
       let updatedTodo = todos.map(todo =>
           {
               if (todo.id === id){
                   return {...todo, task: updatedTask}
               }else{
                   return todo;
               }
           }
       )
        setInitialTodos(updatedTodo)
    }

    const removeTodo = (id)=>{
        let deleteTodo = initialTodos.filter(initials => initials.id !== id)
        setInitialTodos(deleteTodo)
    }

    const toggleComplete = (id) => {
        let update = todos.map(todo =>
            {
                if (todo.id === id){
                    return {...todo, completed: !todo.completed}
                }else{
                    return todo;
                }
            }
        )
        setInitialTodos(update)
    }

    return (
        <>
            {initialTodos.map(initialTodo =>
                <DisplayTodo task={initialTodo.task} key={initialTodo.id} id={initialTodo.id} removeTodo={removeTodo}  updateTodo={update} completed={initialTodo.completed} isComplete={toggleComplete}/>
            )}
            <AddTodoForm addATask={addNewTask}/>
        </>
    )
}
export default TodoList;
