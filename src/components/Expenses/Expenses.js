import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2021');

  const addSelectedYear = (year) => {
    console.log(`Coming from Expenses: ${year}`);
    setSelectedYear(year);
  };

  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear);

  return (
    <Card className='expenses'>
      <ExpensesFilter selectedYear={selectedYear} onSelectedYear={addSelectedYear} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;