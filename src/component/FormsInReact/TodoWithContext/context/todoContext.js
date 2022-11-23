import {createContext} from "react";
import useTodoState from "../useTodoState";
import uuid from "react-uuid";
const todos = [
    {
        id:uuid(),
        myTask:"write reactjssss",
        completed:false
    },
    {
        id:uuid(),
        myTask: "write angular",
        completed: false
    }
]

export const TodoContext = createContext();

export  function TodoProvider(props) {
    const todoStuff = useTodoState(todos)
    return (
        <TodoContext.Provider value={todoStuff}>
            {props.children}
        </TodoContext.Provider>
    )
}
