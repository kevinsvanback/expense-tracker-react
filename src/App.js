import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Dummy Expense 1',
    amount: 75,
    date: new Date(2020, 5, 15)
  },
  {
    id: 'e2',
    title: 'Dummy Expense 2',
    amount: 149,
    date: new Date(2020, 9, 17)
  },
  {
    id: 'e3',
    title: 'Dummy Expense 3',
    amount: 529,
    date: new Date(2021, 10, 27)
  },
  {
    id: 'e4',
    title: 'Dummy Expense 4',
    amount: 379,
    date: new Date(2022, 11, 31)
  },
  {
    id: 'e5',
    title: 'Dummy Expense 5',
    amount: 199,
    date: new Date(2021, 2, 25)
  },
  {
    id: 'e6',
    title: 'Dummy Expense 6',
    amount: 879,
    date: new Date(2022, 10, 8)
  },
  {
    id: 'e7',
    title: 'Dummy Expense 7',
    amount: 69,
    date: new Date(2021, 4, 22)
  },
  {
    id: 'e8',
    title: 'Dummy Expense 8',
    amount: 1025,
    date: new Date(2022, 3, 12)
  },
  {
    id: 'e9',
    title: 'Dummy Expense 9',
    amount: 4980,
    date: new Date(2022, 1, 4)
  },
  {
    id: 'e10',
    title: 'Dummy Expense 10',
    amount: 12,
    date: new Date(2022, 4, 10)
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
