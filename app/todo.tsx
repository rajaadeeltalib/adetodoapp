"use client";
import React, { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { todoText: "Todo 1", completed: false },
    { todoText: "Todo 2", completed: false },
    { todoText: "Todo 3", completed: false },
  ]);
  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo("");
  };
  const deleteTodo = (e: any) => {
    const newTodos = todos.filter((todo) => {
      if (todo.todoText == e.todoText) return false;
      return true;
    });
    setTodos(newTodos)
  };
  return (
    <>
      <div>Todo</div>
      <input
        placeholder="add todo text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((e) => {
          const onClickHandler = (e: any) => {
            const newTodos = todos.map((todo) => {
              if (todo.todoText === e.todoText) {
                todo.completed = !todo.completed;
              }
              return todo;
            });
            setTodos(newTodos);
          };
          return (
            <li
              style={{
                color: e.completed ? "green" : "orangered",
                fontStyle: "oblique",
                listStyle: "none",
              }}
              key={e.todoText}
            >
              <input
                type="checkbox"
                checked={e.completed}
                onChange={() => {
                  onClickHandler(e);
                }}
              />
              {e.todoText}
              <button
                onClick={() => {
                  deleteTodo(e);
                }}
                style={{ backgroundColor: "graylight", margin: "15px" }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
