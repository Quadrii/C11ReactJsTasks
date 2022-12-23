import React, {useState} from "react";
import uuid from "react-uuid";
const AddNewExpenses = (props)=>{
    const [name, setName] = useState()
    const [itemQty, setItemQty] = useState()
    const [itemPrice, setItemPrice] = useState()

    const handleSubmit = (e)=>{
        e.preventDefault()
        props.addExpense({id:uuid(), itemName: name, qty: itemQty, price:Number(itemPrice)})
        setItemPrice('')
        setItemQty("")
        setName('')
    }
    const handleNameChange=(e)=>{
       setName(e.target.value)
    }
    const handlePriceChange=(e)=>{
        setItemPrice(e.target.value)
    }
    const handleQtyChange=(e)=>{
        setItemQty(e.target.value)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} className="exp-input" placeholder="Item Name"/>
                <input value={itemQty} onChange={handleQtyChange} className="exp-input" placeholder="Quantity"/>
                <input value={itemPrice} onChange={handlePriceChange} className="exp-input" placeholder="Price"/>
                <button type='submit' className="exp-button">Add Item</button>
            </form>
        </>
    )
}
export default AddNewExpenses;
