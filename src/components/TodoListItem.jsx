import React from 'react';
export default function TodoListItem({ todo, onToggle, onDelete }){
  const { id, text, checked } = todo;

  return(
    <div style={{ textDecoration: checked ? 'line-through' : 'none' }}>
      <input type="checkbox" checked={checked} onChange={()=> onToggle(id)}/>
      {id}
      <span>{ text }</span>
      <button onClick={()=> onDelete(id)}>삭제</button>
    </div>
  )
}