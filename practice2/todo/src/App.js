import { useState, useRef, useCallback } from 'react';
import TodoInsert from './TodoInsert';
import TodoTemplate from './TodoTemplate';
import TodoList from './TodoList';

const createBulkTodos = () => {
  const array = [];
  for (let i = 0; i < 2500; i++) {
    array.push({ id: i, text: `할 일 ${i}`, checked: false });
  }
  return array;
};
// import Test from './test';
function App() {
  const [todos, setTodos] = useState(createBulkTodos);
  const nextId = useRef(2501);
  const onInsert = useCallback(
    (text) => {
      const todo = [{ text, checked: false, id: nextId.current }];
      setTodos((todos) => todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onDelete = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);
  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle} />
      </TodoTemplate>
      {/* <Test /> */}
    </div>
  );
}
//new branch
export default App;
