import { NavLink } from 'react-router';
import './CalculationHistoryComponent.css';
import { paths } from '../../static/paths';
import { calculation } from '../../utils/types/types';

export default function CalculationHistoryComponent() {
  const calcHistory = JSON.parse(localStorage.getItem('calculations') || '[]');
  return (
    <div className='calculationHistoryComponent_container'>
      {calcHistory.length > 0 ? (
        <>
          <h1 className='calculationHistoryComponent_title'>Your Calculations</h1>
          {calcHistory.map((calc: calculation) => {
            return (
              <span
                key={calc.result}
                className='calculationHistoryComponent_element'
              >
                {calc.leftSide} {calc.operation} {calc.rightSide} ={' '}
                {calc.result}
              </span>
            );
          })}
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
