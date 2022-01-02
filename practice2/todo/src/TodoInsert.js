import './TodoInsert.scss';
import { MdAdd } from 'react-icons/md';
const TodoInsert = () => {
  return (
    <div className="insertTemplate">
      <input className="insert" placeholder="hi"></input>
      <div className="button">
        <MdAdd />
      </div>
    </div>
  );
};

export default TodoInsert;
