import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "../Expenses/ExpenseItem";

const ExpensesList = (props) => {
  if (props.expenseslist.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenseslist.map((element) => (
        <ExpenseItem
          key={element.id}
          title={element.title}
          amount={element.amount}
          date={element.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
