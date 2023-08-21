import React, { useState } from "react";

import ExpenseItem from "../Expenses/ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("");

  const filteredExpenses = props.items.filter((expense) => {
    console.log('Item To Filter'+JSON.stringify(expense)+' Year Filter '+filteredYear)
    console.log('what is breaking '+expense.date.getFullYear().toString() + ' Equal to '+filteredYear)
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const onFilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={onFilterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenseslist={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
