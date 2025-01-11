import { calculation, CalculatorOperationProps } from '../../utils/types/types';
import './CalculatorOperations.css';

export default function CalculatorOperations({
  calculation,
  setCalculation,
  result,
  setResult,
}: CalculatorOperationProps) {
  const operations = ['+', '-', '*', '/'];
  let minLength = 0;
  const onClick = (e: React.MouseEvent, operation: string) => {
    e.preventDefault();
    setCalculation((prev) => ({
      ...prev,
      operation: operation,
    }));
  };

  if (calculation.leftSide !== null) {
    minLength = calculation.leftSide.toLocaleString().length;
  }
  const allFieldsValid =
    calculation.leftSide !== null &&
    calculation.rightSide !== null &&
    calculation.rightSide.toLocaleString().length > 0 &&
    calculation.operation;

  const calcResult = (e: React.MouseEvent, calculation: calculation) => {
    e.preventDefault();
    try {
      switch (calculation.operation) {
        case '+':
          setResult(
            (calculation.leftSide! + calculation.rightSide!).toLocaleString()
          );
          setCalculation({
            rightSide: null,
            leftSide: null,
            operation: '',
          });
          break;
        case '-':
          setResult(
            (calculation.leftSide! - calculation.rightSide!).toLocaleString()
          );
          setCalculation({
            rightSide: null,
            leftSide: null,
            operation: '',
          });
          break;
        case '/':
          setResult(
            (calculation.leftSide! / calculation.rightSide!).toLocaleString()
          );
          setCalculation({
            rightSide: null,
            leftSide: null,
            operation: '',
          });
          break;
        case '*':
          setResult(
            (calculation.leftSide! * calculation.rightSide!).toLocaleString()
          );
          setCalculation({
            rightSide: null,
            leftSide: null,
            operation: '',
          });
          break;
        default:
          throw new Error('Invalid operation');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Calculation error:', error.message);
        setResult('Error: ' + error.message);
      }
      console.error('Unknown error occurred');
      setResult('Error: An unknown error occurred');
    }
  };

  const isClearEnabled =
    calculation.leftSide !== null ||
    calculation.rightSide !== null ||
    calculation.operation !== '' ||
    result !== null;

  const clearState = (e: React.MouseEvent) => {
    e.preventDefault();
    setCalculation({
      rightSide: null,
      leftSide: null,
      operation: '',
    });
    setResult(null);
  };
  return (
    <>
      <div className='calculatorOperation_container'>
        {minLength > 0
          ? operations.map((operation) => {
              return (
                <button
                  className='calculatorOperation_button'
                  key={operation}
                  onClick={(e) => onClick(e, operation)}
                >
                  <b>{operation}</b>
                </button>
              );
            })
          : operations.map((operation) => {
              return (
                <button
                  className='calculatorOperation_button_disabled'
                  key={operation}
                  disabled
                >
                  <b>{operation}</b>
                </button>
              );
            })}
        {allFieldsValid ? (
          <>
            <button
              className='calculatorOperation_button'
              onClick={(e) => {
                calcResult(e, calculation);
              }}
            >
              Result
            </button>
            <button
              className='calculatorOperation_button'
              onClick={(e) => clearState(e)}
            >
              Clear
            </button>
          </>
        ) : (
          <>
            <button disabled className='calculatorOperation_button_disabled'>
              Result
            </button>
            <button
              disabled={!isClearEnabled}
              className={
                !isClearEnabled
                  ? 'calculatorOperation_button_disabled'
                  : 'calculatorOperation_button'
              }
              onClick={(e) => clearState(e)}
            >
              Clear
            </button>
          </>
        )}
      </div>
    </>
  );
}
