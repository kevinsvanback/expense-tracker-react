import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2021');

  const addSelectedYear = (year) => {
    console.log(`Coming from Expenses: ${year}`);
    setSelectedYear(year);
  };

  return (<Card className='expenses'>
    <ExpensesFilter selectedYear={selectedYear} onSelectedYear={addSelectedYear} />
    {props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear).map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
  </Card>);
};

export default Expenses;