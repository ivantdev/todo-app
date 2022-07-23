import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";

import { TodoHeader } from "./TodoHeader.js";

const  todos  = [
  { text:  "Cortar cebolla", priority: "high",completed:  false},
  { text:  "Cortar zanahoria", priority: "high",completed:  false},
  { text:  "Comprar mangos", priority: "medium",completed:  false},
  { text:  "Comer más manzanas", priority: "low",completed:  false},
  { text:  "Comer manzanas", priority: "medium",completed:  true},
]

function App(props) {
  return (
    <React.Fragment>
      <TodoHeader />
      <div className="main__container">
        <TodoCounter />
    
        <TodoSearch />
    
        <TodoList>
          { todos.map((todo) => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} priority={todo.priority} />
          ))}
        </TodoList>
        <CreateTodoButton />
      </div>
    </React.Fragment>
  );
}

export default App;
