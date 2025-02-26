import './Calculator.css';
import CalculatorNumbers from '../../components/CalculatorNumbers/CalculatorNumbers';
import CalculatorOperations from '../../components/CalculatorOperations/CalculatorOperations';
import { useState } from 'react';
import { calculation } from '../../utils/types/types';
import Calculatordisplay from '../../components/CalculatorDisplay/Calculatordisplay';

export default function Calculator() {
  const [calculation, setCalculation] = useState<calculation>({
    rightSide: null,
    leftSide: null,
    operation: '',
  });
  const [result, setResult] = useState<string | null>(null);
  return (
    <div className='calculator_container'>
      <Calculatordisplay result={result} calculation={calculation} />
      <CalculatorNumbers
        calculation={calculation}
        setCalculation={setCalculation}
        setResult={setResult}
      />
      <CalculatorOperations
        calculation={calculation}
        setCalculation={setCalculation}
        result={result}
        setResult={setResult}
      />
    </div>
  );
}
