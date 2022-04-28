import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


function Expenses(props) {

    const [filterdYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = SelectedYear => {
        setFilteredYear(SelectedYear);
    }
    // array of all expenses after filtering by year
    const filterdExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterdYear;
    })

    

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filterdYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
                <ExpensesChart expenses={filterdExpenses}></ExpensesChart>
                <ExpensesList items={filterdExpenses}></ExpensesList>
            </Card>
        </div>
    )
}

export default Expenses;