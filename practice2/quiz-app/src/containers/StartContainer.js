import React, { useEffect } from 'react';
import StartPage from '../Pages/StartPage';
import { useSelector, useDispatch } from 'react-redux';
import { addNum } from '../reducers/ApiReducer';

const StartContainer = () => {
  const { num } = useSelector((state) => ({
    num: state.num,
  }));

  const dispatch = useDispatch();

  const onAddNum = () => dispatch(addNum());

  return <StartPage num={num} onAddNum={onAddNum} />;
};

export default StartContainer;
