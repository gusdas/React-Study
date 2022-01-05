import './TodoInsert.scss';
import { MdAdd } from 'react-icons/md';
const TodoInsert = () => {
  return (
    <div className="insertTemplate">
      <input className="insert" placeholder="할 일을 입력하세요"></input>
      <div className="button">
        <MdAdd />
      </div>
    </div>
  );
};

export default TodoInsert;
