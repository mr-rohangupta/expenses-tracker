import React, { useState } from 'react';

import Expenses from './components/NewExpense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const initial_expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance Of Mr Harish Paid By Rohan',
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

  const [expenses, setExpenses] = useState(initial_expenses);

  const addExpenseHandler = (expenseItem) => {
    console.log('App Js with new expense'+JSON.stringify(expenseItem))
    setExpenses((listOfAllAlreadyAddedExpenses) => {
      console.log('Previous Expense'+JSON.stringify(listOfAllAlreadyAddedExpenses))
      //Rohan's Comment Reason for adding ...PrevExpenses is if you dont new item so this spread operatior copy the element 
      //to array and display's it.
      //You can either use like this as well [...listOfAllAlreadyExpenses, expenseItem] --> Only change is the new element gets added 
      //in last or first

      return [expenseItem, ...listOfAllAlreadyAddedExpenses]
    });
  }

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
