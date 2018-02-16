import { cons } from 'hexlet-pairs';
import { getRandomInt, game } from '../index';

const gameHeader = 'Answer "yes" if number even otherwise answer "no".';

const getStepValues = () => {
  const number = getRandomInt(1, 100);
  const isEven = number % 2 === 0;

  const question = `${number}`;
  const correctAnswer = isEven ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const even = game(gameHeader, getStepValues);
export default even;
