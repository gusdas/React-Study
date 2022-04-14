import React, { useCallback, useState, useEffect } from 'react';

const Root = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const onClick = () => {
    setCount(count + 1);
    console.log('상태변경');
  };

  useEffect(() => {
    console.log('부모렌더링됌');
  }, [text]);
  return (
    <>
      <button
        style={{
          width: '100px',
          height: '100px',
          margin: '20px',
          background: 'red',
        }}
        onClick={onClick}
      >
        margin
      </button>
      <Child text={text} setText={setText}></Child>
    </>
  );
};
const Child = () => {
  useEffect(() => {
    console.log('자식렌더링됌');
  });
  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        margin: '20px',
        background: 'red',
      }}
    >
      ds
    </div>
  );
};
export default Root;
