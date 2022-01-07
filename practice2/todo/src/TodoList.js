import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem text={todo.text} checked={todo.checked} />
      ))}
    </div>
  );
};

export default TodoList;
