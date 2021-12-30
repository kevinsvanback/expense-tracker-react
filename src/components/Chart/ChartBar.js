import './ChartBar.css';

const ChartBar = (props) => {
  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div className='chart-bar__fill'>{props.value}</div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );
};
const x = 4;
// ddd

export default ChartBar;


// asd
// dasdd