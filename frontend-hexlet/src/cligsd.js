import readlineSync from 'readline-sync';
import sayHiUser from './cli.js';

const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const gsd = () => {
  const name = sayHiUser();
  console.log('Find the greatest common divisor of given numbers.');
  let count = 0;
  while (true) {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    console.log(`Question: ${number1} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    const maxTempNod = gcd(number1, number2);
    if (parseInt(answer) === maxTempNod) {
      console.log('Correct!');
      count += 1;
      if (count === 3) {
        console.log(`Congratulations, ${name}!`);
        count = 0;
      }
    } else {
      count = 0;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${maxTempNod}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};
export default gsd;
