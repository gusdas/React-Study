import React, { useState } from 'react';
const Say = () => {
  const [msg1, setMsg1] = useState('');
  const onClickEnter = () => setMsg1('하이');
  const onClickLeave = () => setMsg1('바이');
    const [color, setColor] = useState('black');
    const [message,setMessage] = useState('')
  return (
    <>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장 </button>
      <h1 style={{ color:color}}>{msg1}</h1>
        <input type="text"value={message} onChange={(e)=>{ setMessage(e.target.value)}}></input>
      <button style={{ color:'red'}}onClick={()=>{setColor('red')}}>빨강</button>
      <button style={{ color:'blue'}} onClick={()=>{setColor('blue')}}>파랑</button>
      <button style={{ color:'green'}} onClick={()=>{setColor('green')}}>초록</button>
      

    </>
  );
};

export default Say;
