import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  //This is another way of using useState
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     entredDate: ''
  // })

  // const titleChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //         return {
  //             ...prevState,
  //             enteredTitle: event.target.value
  //         }
  //     })
  // }

  // const amountChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //         return {
  //             ...prevState,
  //             enteredAmount: event.target.value
  //         }
  //     })
  // }

  // const dateChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //         return {
  //             ...prevState,
  //             entredDate: event.target.value
  //         }
  //     })
  // }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onSave(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };
  

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            min="1"
            max="100"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={date} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
