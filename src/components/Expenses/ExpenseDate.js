import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const day = props.date.toLocaleString('sv-SV', { day: 'numeric' });
  const month = props.date.toLocaleString('sv-SV', { month: 'long' });
  const year = props.date.toLocaleString('sv-SV', { year: 'numeric' });

  return (
    <div className='expense-date'>
      <div className='expense-date__day'>{day}</div>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
    </div>
  );
};

export default ExpenseDate;