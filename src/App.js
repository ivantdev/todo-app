import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";

import { TodoHeader } from "./TodoHeader.js";

const  defaultTodos  = [
  { text: "Sembrar zanahoria", priority: "high", completed: false},
  { text: "Comer mangos", priority: "medium", completed: false},
  { text: "Devorar más manzanas", priority: "low", completed: false},
  { text: "Cortar cebolla", priority: "high", completed: false},
  { text: "Comer manzanas", priority: "medium", completed: true},
]

const priorityValues = ["high", "medium", "low"];

const sortTodos = (todoList) => {
  let completed = todoList.filter((todo) => !!todo.completed);
  let uncompleted = todoList.filter((todo) => !todo.completed);

  const compare = (a, b) => {
    const valA = priorityValues.findIndex((value) => value===a.priority);
    const valB = priorityValues.findIndex((value) => value===b.priority);
    if (valA < valB) {
      return -1;
    }
    else if (valA > valB) {
      return 1;
    }
    else {
      return 0;
    }
  }

  completed = completed.sort(compare);

  uncompleted = uncompleted.sort(compare);

  const listSorted = [...uncompleted, ...completed];
  return listSorted;
};

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

  searchedTodos = sortTodos(searchedTodos);

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

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
            <TodoItem 
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              priority={todo.priority}
              onComplete={() => completeTodos(todo.text)}
              onDelete={() => deleteTodos(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
      </div>
    </React.Fragment>
  );
}

export default App;
