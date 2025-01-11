export interface calculation {
  leftSide: number | null;
  operation: string;
  rightSide: number | null;
}
export interface CalculatorNumberProps {
  calculation: calculation;
  setCalculation: React.Dispatch<React.SetStateAction<calculation>>;
}
export interface CalculatorOperationProps {
  calculation: calculation;
  setCalculation: React.Dispatch<React.SetStateAction<calculation>>;
  setResult: React.Dispatch<React.SetStateAction<string | null>>;
}
