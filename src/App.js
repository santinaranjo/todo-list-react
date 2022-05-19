import React from "react";

import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";
// import logo from './logo.svg';
// import './App.css';
const todos = [
  { text: "Cortar cebollaaaaas", completed: false },
  { text: "Hacer una cosa have", completed: false },
  { text: "Comprar chirimollas", completed: false },
]


function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo =>(<TodoItem key={todo.text} text={todo.text} />))}
      </TodoList>
      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;
