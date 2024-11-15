import runGames from "../index.js";

const  generateRoundData = () => {
  const number = Math.floor(Math.random() * 100);
  const question = String(number);
  const correctAnswer =  number % 2 === 0 ? 'yes' : 'no';
  return {question, correctAnswer};
};

const evenNumber = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGames(description, generateRoundData);
}

export default evenNumber;
