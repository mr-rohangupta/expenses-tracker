import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const onSaveHandler = (expenseRecord) => {
    const expenseDataRecord = {
      ...expenseRecord,
      id: Math.random.toString(),
    };
    console.log("Inside New Expense..");
    console.log(expenseDataRecord);
    props.onAddExpense(expenseRecord);
  };

  const onAddEditingHandler = () => {
    setIsEditing(true);
  };

  const onStopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing ? (
        <button onClick={onAddEditingHandler}>Add New Expense</button>
      ) : null}
      {isEditing ? <ExpenseForm onCancel={onStopEditingHandler} onSave={onSaveHandler} /> : null}
    </div>
  );
};

export default NewExpense;
