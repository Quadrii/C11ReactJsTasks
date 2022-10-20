import React from "react";
import uuid from "react-uuid";
import DisplayExpenses from "./displayExpenses";
const Expense = ()=>{
    const expenses = [
        {
            id:uuid(),
            itemName:"milk",
            qty:2,
            price:100,
        },
    ]
    return (
        <>
            {expenses.map(expense=>
                <DisplayExpenses item={expense.itemName} quantity={expense.qty} price={expense.calc}/>
            )}
        </>
    )
}
export default Expense;
