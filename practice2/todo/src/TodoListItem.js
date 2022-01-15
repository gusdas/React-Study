import React from 'react';
import './TodoListItem.scss';
import cn from 'classnames';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';

const TodoListItem = ({ todo, onDelete, onToggle }) => {
  const { text, checked, id } = todo;
  return (
    <div className="listItem">
      <div
        className={cn('checkbox', { checked })}
        onClick={() => {
          onToggle(id);
        }}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>

      <div
        className="deleteBtn"
        onClick={() => {
          onDelete(id);
        }}
      >
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
