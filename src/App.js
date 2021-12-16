import Expenses from "./components/Expenses";

function App() {
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

  return (
    <div>
      <h2>React app</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
