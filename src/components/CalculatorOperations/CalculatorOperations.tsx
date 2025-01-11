import { CalculatorNumberProps } from "../../utils/types/types";
import "./CalculatorOperations.css";

export default function CalculatorOperations({
  calculation,
  setCalculation,
}: CalculatorNumberProps) {
  const operations = ["+", "-", "*", "/"];
  let minLength = 0;
  const onClick = (e: React.MouseEvent, operation: string) => {
    e.preventDefault();
    setCalculation((prev) => ({
      ...prev,
      operation: operation,
    }));
    console.log(operation);
  };

  if (calculation.leftSide !== null) {
    minLength = calculation.leftSide.toLocaleString().length;
  }

  return (
    <>
      <div className="calculatorOperation_container">
        {minLength > 0
          ? operations.map((operation) => {
              return (
                <button
                  className="calculatorOperation_button"
                  key={operation}
                  onClick={(e) => onClick(e, operation)}
                >
                  <b>{operation}</b>
                </button>
              );
            })
          : null}
      </div>
    </>
  );
}
