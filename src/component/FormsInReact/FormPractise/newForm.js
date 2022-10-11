import React, {useState} from "react";
const NewForm = (props)=>{
    const [itemName, setItemName] = useState();
    const [itemQty, setItemQty] = useState();
    const handleQtyChange = (e) => {
        setItemQty(e.target.value)
    }
    const handleNameChange = (e)=> {
        setItemName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addANewItem({name: itemName, qty: itemQty});
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input id="name" value={itemName} onChange={handleNameChange}/>
                <input id="qty" value={itemQty} onChange={handleQtyChange}/>
                <button>Add Item</button>
            </form>
        </>
    )
}
export default NewForm;

