import sayHiUser from './games/cli.js';
import readlineSync from 'readline-sync';

const runGames = (description, generateRoundData) => {
    const name = sayHiUser();
    console.log(description);

    const roundsToWin = 3;
    let count = 0;

    while (count < roundsToWin) {
        const { question, correctAnswer } = generateRoundData();
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');
    
        if (userAnswer === correctAnswer) {
          console.log('Correct!');
          count += 1;
        } else {
          console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
          console.log(`Let's try again, ${name}!`);
          return;
        }
      }
      console.log(`Congratulations, ${name}!`);
    };
    
export default runGames;






