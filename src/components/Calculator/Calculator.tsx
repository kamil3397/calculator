import React, { FC, useState } from 'react';
import { Display } from '../Display/Display';
import { Button } from '../Button/Button';
import '../../Calclulator.css'

export const Calculator: FC = () => {
  const [calculation, setCalculation] = useState<string>('');

  const buttons = [
    'C', '+/-', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
  ];

  //funkcja do doklejania znaków po działaniach
  const appendToExpression = (value: string) => {
    setCalculation((prev) => prev + value);
  };

 const clearAll = () => {
  setCalculation('');
  };

  // funkcja do liczenia calego wpisanego dzialania
  const calculate = () => {
    try {
      const result = eval(calculation); //oblicza string jako dzialanie
      if (!isFinite(result)) {
        setCalculation('Error');
      } else {
        setCalculation(result.toString());
      }
    } catch {
      setCalculation('Error');
    }
  };
//funkcja do zmiany z liczby calkowitej na ujemna i odwrotnie
 const toggleSign = () => {
      if (calculation.startsWith('-')) {
        setCalculation(calculation.substring(1));
      } else {
        setCalculation('-' + calculation);
      }
  };
  
 const percent = () => {
    try {
      const value = eval(calculation);
      setCalculation((value / 100).toString());
    } catch {
      setCalculation('Error');
    }
  };

  const handleButtonClick = (label: string) => {
    if (label === 'C') return clearAll();
    if (label === '=') return calculate();
    if (label === '+/-') return toggleSign();
    if (label === '%') return percent();
    appendToExpression(label);
  };

  return (
    <div className="calculator">
      <Display value={calculation} />
      <div className="buttons">
        {buttons.map((btn) => (
          <Button key={btn} label={btn} onClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
};




// 1. ładnie ostylowany czystym css bez bibliotek
/* 2. responsywny
    3. cały otestowany, corner case'y pozytywne negatywne, wszytko
    4. Aplikacja ma miec napiosany plan do wglądu
 */