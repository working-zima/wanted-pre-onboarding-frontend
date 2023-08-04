import { useState } from "react";

function TodoForm({ createTodo }) {
  const [text, setText] = useState("");
  const handleChange = (evt) => {
    setText(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    createTodo(text);
    setText("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="new-todo-input"
          value={text}
          onChange={handleChange}
        />
        <button data-testid="new-todo-add-button">추가</button>
      </form>
    </div>
  );
}

export default TodoForm;
