import { useEffect, useState } from "react";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import * as Api from "../api";

function TodoPage() {
  const [todos, setTodos] = useState([]);

  // useEffect를 사용하여 초기 데이터를 가져옵니다.
  useEffect(() => {
    fetchTodos();
  }, []);

  // 서버에서 todos 데이터를 가져오는 함수입니다.
  const fetchTodos = async () => {
    try {
      const response = await Api.get("todos");
      setTodos(response.data);
    } catch (err) {
      console.error("불러오기 실패", err);
    }
  };

  // TodoForm에서 사용될 createTodo 함수를 정의합니다.
  const createTodo = async (text) => {
    try {
      await Api.post("todos", { todo: text });
      fetchTodos();
    } catch (err) {
      console.error("등록 실패", err);
    }
  };

  // checkbox의 체크 유무를 변경합니다.
  const toggleTodo = async (id, todo, isCompleted) => {
    try {
      await Api.put(`todos/${id}`, {
        todo: todo,
        isCompleted: !isCompleted,
      });
      fetchTodos();
    } catch (err) {
      console.error("체크박스 변경 실패", err);
    }
  };

  // todo를 삭제합니다.
  const deleteTodo = async (todo) => {
    const id = todo.id;
    try {
      await Api.delete(`todos`, id);
      fetchTodos();
    } catch (err) {
      console.error("삭제 실패", err);
    }
  };

  // todo를 수정합니다.
  const updateTodo = async (id, isCompleted, todo) => {
    try {
      await Api.put(`todos/${id}`, {
        todo: todo,
        isCompleted: isCompleted,
      });
      fetchTodos();
    } catch (err) {}
  };

  return (
    <div>
      <TodoForm createTodo={createTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoPage;
