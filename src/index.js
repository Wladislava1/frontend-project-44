import sayHiUser from './games/cli.js';
import readlineSync from 'readline-sync';
import { ROUNDS_TO_WIN } from './config.js';

const runGames = (description, generateRoundData) => {
  const name = sayHiUser();
  console.log(description);

  for (let count = 0; count < ROUNDS_TO_WIN; count++) {
    const { question, correctAnswer } = generateRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGames;