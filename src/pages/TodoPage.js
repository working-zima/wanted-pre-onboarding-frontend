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
      const response = await Api.post("todos", { todo: text });
      setTodos([...todos, response.data]);
    } catch (err) {
      console.error("등록 실패", err);
    }
  };

  const toggleTodo = async (id) => {
    try {
      const response = await Api.post();
    } catch (err) {
      console.error("체크 실패", err);
    }
  };

  return (
    <>
      <TodoForm createTodo={createTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  );
}

export default TodoPage;
