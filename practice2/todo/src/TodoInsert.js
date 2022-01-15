import './TodoInsert.scss';
import { MdAdd } from 'react-icons/md';
import { useState, useCallback } from 'react';
const TodoInsert = ({ onInsert }) => {
  const [text, setText] = useState('');
  const onChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onInsert(text);
      setText('');
    },
    [onInsert, text]
    //왜 useCallbck 쓸까?
  );
  return (
    <form className="insertTemplate" onSubmit={onSubmit}>
      <input
        className="insert"
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={onChange}
      />
      <div className="button" type="submit" onClick={onSubmit}>
        <MdAdd />
      </div>
    </form>
  );
};

export default TodoInsert;
