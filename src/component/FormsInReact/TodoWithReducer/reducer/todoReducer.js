import uuid from "react-uuid";

const todoReducer = (state, action)=>{
    switch (action.type){
        case "ADDTODO":
            return [...state, {id: uuid(), myTask: action.newTask, completed: false}]
        case "REMOVE":
            return state.filter(initial=>
                initial.id !== action.id)
        case "TOGGLE":
            return state.map(initial =>
                {
                    if (initial.id === action.id){
                        return {...initial, completed: !initial.completed}
                    }else{
                        return initial;
                    }
                }
            )
        case "EDIT":
            return state.map(initial=>
                {
                    if(initial.id === action.id){
                        return {...initial, myTask: action.updatedTask}
                    }
                    else {
                        return  initial;
                    }
                }
            )
        default:
            return state;
    }
}

export default todoReducer;