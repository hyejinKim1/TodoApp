import { useState } from "react"
import styled from "styled-components"

export default function TodoInsert({onInsert}){
  const [text, setText] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(text);
    setText("");
  }

  return(
    <div>
      <form onSubmit={onSubmit}>
        <Input
          type="text" 
          placeholder="할일입력" 
          value={text}
          onChange={onChange}
        />
        <Button>저장</Button>
      </form>
    </div>
  )
}

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width:80%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  display: inline-block;
`

const Button = styled.button`
  width: 20%;
  height: 50px;
  display: inline-block;
  background: #63e6be;
`