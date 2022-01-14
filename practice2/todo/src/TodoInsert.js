import './TodoInsert.scss';
import { useState } from 'react';
import { MdAdd } from 'react-icons/md';
const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(value);
    setValue('');
  };
  return (
    <form className="insertTemplate" onSubmit={onSubmit}>
      <input
        className="insert"
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={(e) => onChange(e)}
      />
      <button className="button" type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
