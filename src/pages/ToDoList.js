function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() =>
                  toggleTodo(todo.id, todo.todo, todo.isCompleted)
                }
              />
              <span>{todo.todo}</span>
            </label>
            <button data-testid="modify-button">수정</button>
            <button
              data-testid="delete-button"
              onClick={() => deleteTodo(todo)}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
