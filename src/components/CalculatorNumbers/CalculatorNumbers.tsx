import { CalculatorNumberProps } from '../../utils/types/types';
import './CalculatorNumber.css';

export default function calculatorNumbers({
  calculation,
  setCalculation,
  setResult,
}: CalculatorNumberProps) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const onClick = (e: React.MouseEvent, number: number) => {
    e.preventDefault();
    setResult(null);
    if (!calculation?.rightSide && !calculation.operation) {
      setCalculation((prev) => ({
        ...prev,
        leftSide: parseInt(`${prev!.leftSide ?? ''}${number}`),
      }));
    } else if (calculation?.leftSide) {
      setCalculation((prev) => ({
        ...prev,
        rightSide: parseInt(`${prev!.rightSide ?? ''}${number}`),
      }));
    }
  };

  return (
    <>
      <div className='calculatorNumber_container'>
        {numbers.map((number) => {
          return (
            <button
              key={number}
              className='calculatorNumber_button'
              onClick={(e) => onClick(e, number)}
            >
              <b>{number}</b>
            </button>
          );
        })}
      </div>
    </>
  );
}
