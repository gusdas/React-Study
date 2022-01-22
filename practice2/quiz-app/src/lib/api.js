import axios from 'axios';

export const getQuizzes = () => {
  axios
    .get('https://opentdb.com/api.php?amount=10&type=boolean')
    .then((response) => {
      console.log(response);
    });
};
