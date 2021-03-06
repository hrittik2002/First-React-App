// Everything starts from this app.js file.......it is the root node(or file)
import React,{ useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// expense object
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {

  // Stateful list
  const [expenses , setExpenses] = useState(DUMMY_EXPENSES);

  // adding new expenses to array
  const addExpenseHandler = (expense) => {
    console.log(expenses)
    console.log(expense)
    setExpenses((prevExpenses) => {
      return [expense , ...prevExpenses];
      
    });
    console.log(expenses)
  }
  
  /**
   * To pass data to a component we use the attributes......
   * and these all attributes will be passed to our custom component
   * as a object......which is called props......and all the attributes 
   * will be properties of props
   */
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
