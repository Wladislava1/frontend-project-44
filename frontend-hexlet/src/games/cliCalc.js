import runGames from "../index.js";

const generateCalcRoundData = () => {
  const symbols = ['+', '*', '-'];
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  const symbol = symbols[Math.floor(Math.random() * symbols.length)];
  const question = `${number1} ${symbol} ${number2}`;
  const correctAnswer = String(eval(question));
  return { question, correctAnswer };
};

const calc = () => {
  const description = 'What is the result of the expression?';
  runGames(description, generateCalcRoundData);
};

export default calc;
