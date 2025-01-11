import './Calculator.css';
import CalculatorNumbers from '../CalculatorNumbers/CalculatorNumbers';
import CalculatorOperations from '../CalculatorOperations/CalculatorOperations';
import { useState } from 'react';
import { calculation } from '../../utils/types/types';

export default function Calculator() {
  const [calculation, setCalculation] = useState<calculation>({
    rightSide: null,
    leftSide: null,
    operation: '',
  });
  const [result, setResult] = useState<string | null>(null);
  return (
    <>
      <div className='calculator_container'>
        <CalculatorNumbers
          calculation={calculation}
          setCalculation={setCalculation}
        />
        <CalculatorOperations
          calculation={calculation}
          setCalculation={setCalculation}
          setResult={setResult}
        />
      </div>
    </>
  );
}
