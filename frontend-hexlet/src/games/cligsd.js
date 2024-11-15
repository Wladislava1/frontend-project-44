
import runGames from '../index.js';

const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateRoundData = () => {
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  const question = `${number1} ${number2}`;
  const maxTempNod = gcd(number1, number2);
  const correctAnswer = String(eval(maxTempNod));
  return {question, correctAnswer};
};

const gsd = () => {
  const description = "Find the greatest common divisor of given numbers.";
  runGames(description, generateRoundData);
}

export default gsd;
