import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          style={style}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      );
    },
    [onRemove, onToggle, todos],
  );
  return (
    <List
      className="Todo-list"
      width={512} //전체 크기
      height={513} //전체 높이
      rowCount={todos.length} //전체 배열수
      rowHeight={57} //1줄의 높이
      rowRenderer={rowRenderer} //사용할 함수
      list={todos} //배열
      style={{ outlint: 'none' }} //list의 기본 아웃라인 제거
    />
  );
};
export default React.memo(TodoList);
