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

  let expensesContent = <p>No expenses for this year.</p>;

  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear);

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />);
  }

  return (<Card className='expenses'>
    <ExpensesFilter selectedYear={selectedYear} onSelectedYear={addSelectedYear} />
    {expensesContent}
  </Card>);
};

export default Expenses;