import runGames from "../index.js";
import { getRandomNumber } from '../utils.js';

const generateProgression = (start, step) => {
  const progression = [];
  for (let i = 0; i < 10; i++) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateProgressionRoundData = () => {
  const start = getRandomNumber(0, 99); 
  const step = getRandomNumber(1, 10); 
  const index = getRandomNumber(0, 9);
  const progression = generateProgression(start, step);
  const correctAnswer = String(progression[index]);
  progression[index] = '..';

  const question = progression.join(' ');
  return { question, correctAnswer };
};

const progression = () => {
  const description = 'What number is missing in the progression?';
  runGames(description, generateProgressionRoundData);
};

export default progression;