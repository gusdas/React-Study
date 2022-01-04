import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  return (
    <>
      <TodoListItem text="리액트의 기초 알아보기" />
      <TodoListItem text="컴포넌트 스타일링하기" />
      <TodoListItem text="일정관리 앱 만들어보기" checked="true" />
    </>
  );
};

export default TodoList;
