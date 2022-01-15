import { useState, useRef, useCallback } from 'react';
import TodoInsert from './TodoInsert';
import TodoTemplate from './TodoTemplate';
import TodoList from './TodoList';

// import Test from './test';
function App() {
  const [todos, setTodos] = useState([
    {
      text: '',
      checked: false,
      id: 0,
    },
  ]);
  const nextId = useRef(1);
  const onInsert = useCallback(
    (text) => {
      const todo = [{ text, checked: false, id: nextId.current }];
      setTodos(todos.concat(todo));
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
    console.log(id);
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

export default App;
