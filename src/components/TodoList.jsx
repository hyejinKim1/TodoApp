import TodoListItem from "./TodoListItem"
import styled from 'styled-components';

export default function TodoList({todos, onToggle, onDelete}) {
  return (
    <TodoListDiv>
      {todos.map( todo => (
        <TodoListItem 
          key={todo.id}
          todo={todo} 
          onToggle={onToggle} 
          onDelete={onDelete}/>
      ))}
    </TodoListDiv>
  )
}

const TodoListDiv = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  background: gray;
`