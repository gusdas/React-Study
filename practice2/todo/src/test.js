import './test.scss';
import React, { useReducer } from 'react';

function reducer(state, action) {
  return { state, [action.name]: action.value };
}
const Test = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: '',
  });
  const { name, nickname } = state;
  const onChange = (e) => {
    console.log(e.target.value);
    dispatch(e.target);
  };
  return (
    <div>
      {/* <p>카운터{state.value}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button> */}

      <input name="name" value={name} onChange={onChange}></input>
      <input name="nickname" value={nickname} onChange={onChange}></input>

      <div>이름:{name}</div>
      <div>nick이름:{nickname}</div>
    </div>
  );
};

export default Test;
