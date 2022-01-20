import axios from 'axios';
import { addData } from './reducers/ApiReducer';
export const getData = () => {
  axios
    .get('https://opentdb.com/api.php?amount=10&type=boolean')
    .then((res) => {
      addData(res.data);
      console.log(res.data.results);
    });
};
