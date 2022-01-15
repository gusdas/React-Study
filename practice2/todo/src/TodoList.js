import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          text={todo.text}
          checked={todo.checked}
          id={todo.id}
          onDelete={onDelete}
          key={todo.id}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
