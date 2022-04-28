import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'
function ExpensesList(props) {
    // if the filtered expense list is empty then 
    // print no expenses found
    if(props.items.length === 0){
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }
    //else
  return (
    <ul className='expenses-list'>
        {
            props.items.map((expense) => (
            <ExpenseItem 
            key = {expense.id} // alwayase add key on state array
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date}>   
            </ExpenseItem>
        ))
        }
    </ul>
  )
}

export default ExpensesList