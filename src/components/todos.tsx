import { useState } from "react";
import TodoItem from "./todoItem";

function Todos() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<any>([]);
  function handleSubmit(e: any) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
        />
        <button type="submit">add</button>
      </form>
      {todos.map((item: any) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}

export default Todos;
