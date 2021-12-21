import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Padel',
      amount: 75,
      date: new Date(2021, 11, 15)
    },
    {
      id: 'e2',
      title: 'Beer',
      amount: 149,
      date: new Date(2021, 11, 17)
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
      date: new Date(2021, 11, 31)
    }
  ];

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
