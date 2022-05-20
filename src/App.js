import React from "react";

import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";


const todos = [
  { text: "Cortar cebollaaaaas", completed: false },
  { text: "Comprar el pan", completed: false },
  { text: "Aprender React", completed: true },
]


function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo =>(
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            />))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
