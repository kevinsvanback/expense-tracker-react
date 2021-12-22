import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isAddingExpense, setIsAddingExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const showFormHandler = () => {
    setIsAddingExpense(true);
  };

  const hideFormHandler = () => {
    setIsAddingExpense(false);
  };

  return (<div className='new-expense'>
    {!isAddingExpense && <button onClick={showFormHandler}>Add New Expense</button>}
    {isAddingExpense && < ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideFormHandler} />}
  </div>);
};

export default NewExpense;