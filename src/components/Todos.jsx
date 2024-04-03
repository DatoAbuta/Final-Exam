import React, { useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random(),
      title: title
    };
    setTodos([newTodo, ...todos])
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </form>
      {todos.map((el) => (
        <div key={el.id}>
          <h1>{el.title}</h1>
        </div>
      ))}
    </div>
  );
}
