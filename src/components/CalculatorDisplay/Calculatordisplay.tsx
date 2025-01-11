import './CalculatorDisplay.css';
import { CalculatorDisplayProps } from '../../utils/types/types';

export default function Calculatordisplay({
  calculation,
  result,
}: CalculatorDisplayProps) {
  const { rightSide, leftSide, operation } = calculation;
  return (
    <>
      <section className='calculatorDisplay_container'>
        <b>
          {result ? (
            <section>{result}</section>
          ) : (
            <section>
              {leftSide} {operation} {rightSide}
            </section>
          )}
        </b>
      </section>
    </>
  );
}
