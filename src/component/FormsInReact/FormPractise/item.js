import React, {useState} from "react";
import uuid from 'react-uuid';
import DisplayItem from "./displayItem";
import NewForm from "./newForm";
const Item = ()=>{
    const items = [
        {
            id:uuid(),
            name:"maline",
            qty:7
        },
        {
            id:uuid(),
            name:"grooze",
            qty:6
        }
    ]
   const [initials,setInitials] = useState(items)

    const addNewItem = (item) => {
        let newItem = {...item, id:uuid()}
        const copy = [...initials, newItem]
        setInitials(copy)
    }

    return (
        <>
            <ul>
                {initials.map(initial=>
                    <DisplayItem name={initial.name} quantity={initial.qty}/>
                )}
            </ul>
            <NewForm addANewItem={addNewItem}/>
        </>
    )
}
export default Item;

