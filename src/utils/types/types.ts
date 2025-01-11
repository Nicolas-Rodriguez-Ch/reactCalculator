export interface calculation {
  leftSide: number | null;
  operation: string;
  rightSide: number;
}
export interface CalculatorNumberProps {
  calculation: calculation;
  setCalculation: React.Dispatch<React.SetStateAction<calculation>>;
}
export interface CalculatorOperationProps {
  setCalculation: React.Dispatch<React.SetStateAction<calculation>>;
}
