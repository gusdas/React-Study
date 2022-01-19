import React, { useEffect } from 'react';
import StartPage from '../Pages/StartPage';
import { getQuizzes } from '../api';

const StartContainer = () => {
  getQuizzes();
  return <StartPage></StartPage>;
};

export default React.memo(StartContainer);
