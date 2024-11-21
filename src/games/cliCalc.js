import runGames from '../index.js';
import { getRandomNumber, getRandomElement } from '../utils.js';
import { CALC_SYMBOLS } from '../config.js';

const calculate = (number1, number2, symbol) => {
  switch (symbol) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unsupported operation: ${symbol}`);
  }
};

const generateCalcRoundData = () => {
  const number1 = getRandomNumber(0, 99);
  const number2 = getRandomNumber(0, 99);
  const symbol = getRandomElement(CALC_SYMBOLS);
  const question = `${number1} ${symbol} ${number2}`;
  const correctAnswer = String(calculate(number1, number2, symbol));

  return { question, correctAnswer };
};

const calc = () => {
  const description = 'What is the result of the expression?';
  runGames(description, generateCalcRoundData);
};

export default calc;