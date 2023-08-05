import { useState } from "react";

function TodoList({ todos, toggleTodo, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(null);
  const [editState, setEditState] = useState("");
  const handleEditClick = (idx) => {
    setIsEditing(idx);
    if (idx !== null) {
      setEditState(todos[idx].todo);
    }
  };
  const handleEditChange = (evt) => {
    setEditState(evt.target.value);
  };
  const handleEditSubmit = (todo) => {
    if (!editState) {
      alert("내용을 입력해 주세요.");
      return;
    }
    updateTodo(todo.id, todo.isCompleted, editState);
    handleEditClick(null);
  };
  const handleKeyDown = (evt, todo) => {
    if (evt.key === "Enter") {
      handleEditSubmit(todo);
    }
  };
  return (
    <div>
      <ul>
        {todos.map((todo, idx) => (
          <li key={todo.id}>
            <label htmlFor="checkbox"></label>
            <input
              type="checkbox"
              id="checkbox"
              checked={todo.isCompleted}
              onChange={() => toggleTodo(todo.id, todo.todo, todo.isCompleted)}
            />
            {isEditing === idx ? (
              <input
                data-testid="modify-input"
                value={editState}
                onChange={handleEditChange}
                onKeyDown={(evt) => handleKeyDown(evt, todo)}
              />
            ) : (
              <span>{todo.todo}</span>
            )}
            <button
              data-testid={
                isEditing === idx ? "submit-button" : "modify-button"
              }
              onClick={
                isEditing === idx
                  ? () => handleEditSubmit(todo)
                  : () => handleEditClick(idx)
              }
            >
              {isEditing === idx ? `제출` : `수정`}
            </button>
            <button
              data-testid={
                isEditing === idx ? "cancel-button" : "delete-button"
              }
              onClick={
                isEditing === idx
                  ? () => handleEditClick(null)
                  : () => deleteTodo(todo)
              }
            >
              {isEditing === idx ? `취소` : `삭제`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
