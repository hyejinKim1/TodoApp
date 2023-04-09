import styled, { createGlobalStyle } from 'styled-components';
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import TodoHeader from './components/TodoHeader'
import TodoTemplate from './components/TodoTemplate';
import React, { useRef, useState } from 'react';

export default function App() {
  const [todos,setTodos] = useState([
    {
      id: 1,
      text: 'Learn React',
      checked: true
    },
    {
      id: 2,
      text: 'Learn View',
      checked: true
    },
    {
      id: 3,
      text: 'Learn Redux',
      checked: false
    }
  ]);

  const nextId = useRef(2);

  const onInsert = (text) => {
    setTodos(
      todos.concat({
        id: nextId.current + 1,
        text,
        checked: false
      })
    );

    nextId.current++;
  }

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? {...todo, checked: !todo.checked} : todo
      )
    )
  }

  const onDelete = (id) => {
    setTodos(
      todos.filter((todo) => todo.id!== id)
    )
  }

  return (
    <div>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHeader />
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete}/>
      </TodoTemplate>
    </div>
  )
}

const GlobalStyle = createGlobalStyle`
  margin:0;
  padding:0;
  background: #e9ecef;
`