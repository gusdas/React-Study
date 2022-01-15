import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onDelete, onToggle }) => {
  console.log({ todos });
  return (
    <div className="TodoList">
      {todos.length === 1 ? (
        <div>입력해주세요</div>
      ) : (
        todos.map((todo) =>
          todo.id !== 0 ? (
            <TodoListItem
              todo={todo}
              onDelete={onDelete}
              key={todo.id}
              onToggle={onToggle}
            />
          ) : (
            <></>
          )
        )
      )}
    </div>
  );
};

export default TodoList;
