import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          onDelete={onDelete}
          key={todo.id}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
