import React, { useState } from 'react';
const IterationSample = () => {
  const [names, setName] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);
  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextName = names.concat({ id: nextId, text: inputText });
    setName(nextName);
    setNextId(nextId + 1);
    setInputText('');
  };
  const onDelete = (id) => {
    const nextName = names.filter((name) => name.id !== id);
    setName(nextName);
  };
  const namesList = names.map((name) => (
    <li onDoubleClick={() => onDelete(name.id)} key={name.id}>
      {name.text}
    </li>
  ));
  return (
    <>
      <ul>{namesList}</ul>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
    </>
  );
};

export default IterationSample;
