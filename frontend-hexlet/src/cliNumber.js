import readlineSync from 'readline-sync';
import sayHiUser from './cli.js';

const evenNumber = () => {
  const name = sayHiUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  while (true) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const isEvenNumber = number % 2 === 0;
    const isOddNumber = number % 2 !== 0;
    if ((isEvenNumber && (answer.toLowerCase() === 'yes')) || (isOddNumber && (answer.toLowerCase() === 'no'))) {
      console.log('Correct!');
      count += 1;
      if (count === 3) {
        console.log(`Congratulations, ${name}!`);
        count = 0;
      }
    } else {
      count = 0;
      break;
    }
  }
};

export default evenNumber;
