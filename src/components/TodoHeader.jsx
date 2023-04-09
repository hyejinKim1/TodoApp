import styled from "styled-components"

export default function TodoHeader(){
  return(
    <TodoHeaderDiv>
      <h1>Todo App</h1>
    </TodoHeaderDiv>
  )
}
const TodoHeaderDiv = styled.div`
  padding: 48 32 32 24px;
  border-bottom: 1px solid black;
  h1{
    margin:0;
    font-size: 36px;
    color: #343a40;
  }
`