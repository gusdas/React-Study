import { useState, useRef, useCallback } from 'react';
import TodoInsert from './TodoInsert';
import TodoTemplate from './TodoTemplate';
import TodoList from './TodoList';

// import Test from './test';
function App() {
  const [todos, setTodos] = useState([
    {
      text: '리액트의 기초 알아보기',
      checked: false,
      id: 1,
    },
    { text: '컴포넌트 스타일링하기', checked: false, id: 2 },
    { text: '일정관리 앱 만들어보기', checked: true, id: 3 },
  ]);
  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = [{ text, checked: false, id: nextId.current }];
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onDelete = useCallback(
    (id) => {
      setTodos(todos.filter(todos.id !== id));
    },
    [todos]
  );
  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onDelete={onDelete} />
      </TodoTemplate>
      {/* <Test /> */}
    </div>
  );
}

export default App;
