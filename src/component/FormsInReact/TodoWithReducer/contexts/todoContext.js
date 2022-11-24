import {createContext, useReducer} from "react";
import useTodoState from "../useTodoState";
import uuid from "react-uuid";
import todoReducer from "../reducer/todoReducer";
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
export const DispatchContext = createContext();

export function TodosProvider(props) {
    const [initials, dispatch] = useReducer(todoReducer ,todos)
    return (
        <TodoContext.Provider value={initials}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodoContext.Provider>
    )
}
