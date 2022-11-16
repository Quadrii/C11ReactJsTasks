import uuid from "react-uuid";
import {useState} from "react";

export default initialsTasks => {
    const [initials, setInitials] = useState(initialsTasks);
    return {
        initials,
        updatedTodo: (id, update)=> {
            let updatedTask = initials.map(initial=>
                {
                    if(initial.id === id){
                        return {...initial, myTask: update}
                    }
                    else {
                        return  initial;
                    }
                }

            )
            setInitials(updatedTask)
        },

        addNewTodo: (task)=>{
            let newTask = {...task, id:uuid()}
            let copied = [newTask, ...initials]
            setInitials(copied)
        },

        deletedTask: (id) => {
            let deleteFunc = initials.filter(initial=>
                initial.id !== id
            )
            setInitials(deleteFunc)
        }
    }

}
