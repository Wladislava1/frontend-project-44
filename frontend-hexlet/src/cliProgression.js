import readlineSync from 'readline-sync';
import sayHiUser from './cli.js';

const progression = () => {
  const name = sayHiUser();
  console.log('What number is missing in the progression?');
  let count = 0;
  while (true) {
    const arr = [];
    const number = Math.floor(Math.random() * 100);
    const plus =  Math.floor(Math.random() * 10);
    const index = Math.floor(Math.random() * 9);
    let resultNumber = 0;
    let emptyNumber = 0;
    for(let i = 0; i <= 9; i++){
        resultNumber = parseInt(number) + parseInt(plus*i);
        if (i === parseInt(index)){
            arr.push("..");
            emptyNumber = resultNumber;
        } else {
            arr.push(parseInt(resultNumber));  
        }             
    }
    console.log(`Question: ${arr.join().replaceAll(","," ")}`);
    const answer = readlineSync.question('Your answer: ');
    if (parseInt(answer) === emptyNumber) {
      console.log('Correct!');
      count += 1;
      if (count === 3) {
        console.log(`Congratulations, ${name}!`);
        break;
      }
    } else {
      count = 0;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${emptyNumber}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

export default progression;