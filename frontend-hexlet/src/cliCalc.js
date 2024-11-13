import readlineSync from 'readline-sync';
import sayHiUser from './cli.js';

const calc  = () => {  
    const name = sayHiUser();
    console.log('What is the result of the expression?');
    let count = 0;
    const symbols = ["+", "*", "-"];
    while (true){
        let number1 = Math.floor(Math.random() * 100);
        let number2 = Math.floor(Math.random() * 100);
        let randomIndex = Math.floor(Math.random() * symbols.length);
        let symbol = symbols[randomIndex];
        console.log(`Question: ${number1} ${symbol} ${number2}`);
        const answer = readlineSync.question('Your answer: ');
        const itemResult = `${number1} ${symbol} ${number2}`;
        const result = eval(itemResult);
        if (parseInt(answer) === result){
            console.log('Correct!');
            count += 1;
            if (count === 3){
                console.log(`Congratulations, ${name}!`);
                count = 0;
            }
        } else {
            count = 0;
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
            console.log(`Let's try again, ${name}!`);
            break;
        }
    }
};
export default calc;