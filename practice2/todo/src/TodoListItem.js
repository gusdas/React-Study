import './TodoListItem.scss';
import cn from 'classnames';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
const TodoListItem = ({ text, checked }) => {
  return (
    <div className="listItem">
      <div className={cn('checkbox', { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>

      <div className="deleteBtn">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
