import React, {useState} from "react";
import uuid from "react-uuid";
import './expense.css'
import DisplayExpenses from "./displayExpenses";
import AddNewExpenses from "./addNewExpenses";
const Expense = ()=>{
    const expenses = [
        {
            id:uuid(),
            itemName:"milk",
            qty:2,
            price:100
        },
        {
            id:uuid(),
            itemName:"macaroni",
            qty:2,
            price:250
        },
    ]
    const [allExpenses, setAllExpenses] = useState(expenses)

    const addExpenses = (newItem)=> {
        const items = {...newItem, id:uuid()}
        const expNew = [...allExpenses, items]
        setAllExpenses(expNew)
    }

    const budget = 1000
    const allExpPrice = allExpenses.map(exp =>
        exp.price
    ).reduce((acc, cur) => {return acc + cur}, 0)

    const deleteItem = (id)=>{
       const newExp = allExpenses.filter(exp => exp.id !== id)
        setAllExpenses(newExp)
    }
    // const calcPrice = allExpPrice.reduce((acc, cur)=> {
    //     return acc + cur
    // }, 0
    // )
    return (
        <>
            <h4 className="tracker">
                Budget: {allExpPrice > budget ? `You are  N${allExpPrice - budget} above your budget` :  budget}
            </h4>
            {allExpenses.map(expense =>
                <DisplayExpenses id={expense.id} item={expense.itemName} quantity={expense.qty} price={expense.price} removeItem={deleteItem} />
            )}
            {allExpPrice > budget ? " " : <AddNewExpenses addExpense={addExpenses} />}
        </>
    )
}
export default Expense;
