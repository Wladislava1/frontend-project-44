import runGames from '../index.js';

const generateCalcRoundData = () => {
    const number = Math.floor(Math.random() * 100);
    let primeNumber = "";
    const question = String(number);
    let count = 0;
    for (let i = 1; i <= parseInt(number); i++){
        if (parseInt(number) % i === 0){
            count +=1;
        }
    }
    if (count > 2){
        primeNumber = "no";
    } else {
        primeNumber = "yes";
    }
    const correctAnswer = primeNumber;
    return {question, correctAnswer};
};

const prime = () => {
    const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    runGames(description, generateCalcRoundData);
};

export default prime;