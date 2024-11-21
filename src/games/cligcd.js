import runGames from '../index.js';
import { getRandomNumber } from '../utils.js';

const findGCD = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateGcdRoundData = () => {
  const number1 = getRandomNumber(1, 99);
  const number2 = getRandomNumber(1, 99); 
  const question = `${number1} ${number2}`;
  const correctAnswer = String(findGCD(number1, number2));
  
  return { question, correctAnswer };
};

const gcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  runGames(description, generateGcdRoundData);
};

export default gcd;