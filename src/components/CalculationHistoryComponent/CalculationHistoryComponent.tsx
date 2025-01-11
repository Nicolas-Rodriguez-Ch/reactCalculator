import './CalculationHistoryComponent.css';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import { paths } from '../../static/paths';
import { calculation } from '../../utils/types/types';

export default function CalculationHistoryComponent() {
  const [calcHistory, setCalcHistory] = useState<calculation[]>([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('calculations') || '[]');
    setCalcHistory(storedHistory);
  }, []);

  const deleteHistory = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.removeItem('calculations');
    setCalcHistory([]);
  };
  return (
    <div className='calculationHistoryComponent_container'>
      {calcHistory.length > 0 ? (
        <>
          <h1 className='calculationHistoryComponent_title'>
            Your Calculations
          </h1>
          {calcHistory.map((calc: calculation) => (
            <span
              key={`${calc.leftSide}-${calc.operation}-${calc.rightSide}`}
              className='calculationHistoryComponent_element'
            >
              {calc.leftSide} {calc.operation} {calc.rightSide} = {calc.result}
            </span>
          ))}
          <button 
            className='calculationHistoryComponent_button'
            onClick={deleteHistory}
          >
            Delete your calculations
          </button>
        </>
      ) : (
        <>
          <span>
            <b>We couldn't find any of your calculations.</b>
          </span>
          <nav>
            <NavLink
              to={paths.home}
              className='calculationHistoryComponent_link'
            >
              Go do some math!
            </NavLink>
          </nav>
        </>
      )}
    </div>
  );
}
