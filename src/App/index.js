import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

// const defaultTodos = [
//   { text: "Cortar cebollaaaaas", completed: false },
//   { text: "Comprar el pan", completed: false },
//   { text: "Aprender React", completed: true },
// ]

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
