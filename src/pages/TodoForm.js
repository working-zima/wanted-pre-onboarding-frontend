import { useState } from "react";

import classes from "./TodoForm.module.css";

function TodoForm({ createTodo }) {
  const [text, setText] = useState("");
  const handleChange = (evt) => {
    setText(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!text) {
      alert("내용을 입력해 주세요");
      return;
    }
    createTodo(text);
    setText("");
  };
  return (
    <div className={classes.form}>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="new-todo-input"
          className={classes.input}
          value={text}
          onChange={handleChange}
          placeholder="내용을 입력해 주세요"
          autoFocus
        />
        <button data-testid="new-todo-add-button">추가</button>
      </form>
    </div>
  );
}

export default TodoForm;
