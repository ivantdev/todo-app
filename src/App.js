import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";

import { TodoHeader } from "./TodoHeader.js";

const  defaultTodos  = [
  { text: "Cortar cebolla", priority: "high", completed: false},
  { text: "Sembrar zanahoria", priority: "high", completed: false},
  { text: "Comer mangos", priority: "medium", completed: false},
  { text: "Devorar más manzanas", priority: "low", completed: false},
  { text: "Comer manzanas", priority: "medium", completed: true},
]

function App() {
  const [ todos, setTodos ] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => (!!todo.completed)).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if(searchValue.length > 0) {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const queryText = searchValue.toLowerCase();

      return todoText.includes(queryText);
    });
  } else {
    searchedTodos = todos;
  }

  return (
    <React.Fragment>
      <TodoHeader />
      <div className="main__container">
        <TodoCounter 
          total={totalTodos}
          completed={completedTodos}
        />
    
        <TodoSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue} 
        />
    
        <TodoList>
          { searchedTodos.map((todo) => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} priority={todo.priority} />
          ))}
        </TodoList>
        <CreateTodoButton />
      </div>
    </React.Fragment>
  );
}

export default App;
