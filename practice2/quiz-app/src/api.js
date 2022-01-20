import axios from 'axios';

export const getQuizData = () => {
  axios
    .get('https://opentdb.com/api.php?amount=10&type=boolean')
    .then((response) => {
      console.log(response);
    });
};
