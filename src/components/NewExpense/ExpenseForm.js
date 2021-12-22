import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [formVariable, setFormVariable] = useState(1);

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setFormVariable(1);
  };

  const showFormHandler = (e) => {
    e.preventDefault();

    setFormVariable(2);
  };

  const hideFormHandler = (e) => {
    e.preventDefault();

    setFormVariable(1);
  };

  if (formVariable === 2) {
    return <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button onClick={hideFormHandler}>Cancel</button>
        <button type='submit' onClick={submitHandler}>Add Expense</button>
      </div>
    </form>;
  }

  return (<div style={{ display: "flex", justifyContent: "center" }} className='new-expense__actions'>
    <button style={{ textAlign: "center" }} onClick={showFormHandler}>Add New Expense</button>
  </div >);
};

export default ExpenseForm;