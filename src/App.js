import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Padel',
    amount: 75,
    date: new Date(2019, 11, 15)
  },
  {
    id: 'e2',
    title: 'Beer',
    amount: 149,
    date: new Date(2020, 11, 17)
  },
  {
    id: 'e3',
    title: 'Board games',
    amount: 529,
    date: new Date(2021, 11, 27)
  },
  {
    id: 'e4',
    title: 'Champagne',
    amount: 379,
    date: new Date(2022, 11, 31)
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
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
