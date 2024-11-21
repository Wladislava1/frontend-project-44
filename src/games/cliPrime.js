import runGames from '../index.js';
import { getRandomNumber } from '../utils.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generatePrimeRoundData = () => {
  const number = getRandomNumber(0, 99);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return { question, correctAnswer };
};

const prime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGames(description, generatePrimeRoundData);
};

export default prime;
