import runGames from "../index.js";

const generateCalcRoundData = () => {
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
    const question = `${arr.join().replaceAll(","," ")}`;
    const correctAnswer = String(emptyNumber);
    return {question, correctAnswer};
};

const progression = () => {
  const description = 'What number is missing in the progression?';
  runGames(description, generateCalcRoundData);
};


export default progression;