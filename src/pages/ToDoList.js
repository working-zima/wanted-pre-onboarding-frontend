function TodoList({ todos, toggleTodo }) {
  const handleToggle = () => {
    toggleTodo(todos.id);
  };
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={handleToggle}
              />
              <span>{todo.todo}</span>
            </label>
            <button data-testid="modify-button">수정</button>
            <button data-testid="delete-button">삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
