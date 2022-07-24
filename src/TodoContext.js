import React from "react";
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
  const priorityValues = ["high", "medium", "low"];

  const sortTodos = (todoList) => {
    let completed = todoList.filter((todo) => !!todo.completed);
    let uncompleted = todoList.filter((todo) => !todo.completed);

    const compare = (a, b) => {
      const valA = priorityValues.findIndex((value) => value === a.priority);
      const valB = priorityValues.findIndex((value) => value === b.priority);
      if (valA < valB) {
        return -1;
      } else if (valA > valB) {
        return 1;
      } else {
        return 0;
      }
    };

    completed = completed.sort(compare);

    uncompleted = uncompleted.sort(compare);

    const listSorted = [...uncompleted, ...completed];
    return listSorted;
  };

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [ openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (searchValue.length > 0) {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const queryText = searchValue.toLowerCase();

      return todoText.includes(queryText);
    });
  } else {
    searchedTodos = todos;
  }

  
  const addTodo = (text, priority) => {
    const newTodos = [...todos];
    newTodos.push({
      text: text,
      completed: false,
      priority: priority,
    });
    saveTodos(newTodos)
  }
  
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  
  searchedTodos = sortTodos(searchedTodos);

  return (
    <TodoContext.Provider value={{
	    loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    }}>{props.children}</TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider};