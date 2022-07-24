
import React from "react";
import { AppUI } from './AppUI';

// const  defaultTodos  = [
//   { text: "Sembrar zanahoria", priority: "high", completed: false},
//   { text: "Comer mangos", priority: "medium", completed: false},
//   { text: "Devorar más manzanas", priority: "low", completed: false},
//   { text: "Cortar cebolla", priority: "high", completed: false},
//   { text: "Comer manzanas", priority: "medium", completed: true},
// ];

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

function useLocalStorage(itemName, initialValue) {
  const [ error, setError] = React.useState(false);
  const [ loading, setLoading ] = React.useState(true);
  const [ item, setItem ] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
        setLoading(false);
      } catch(error) {
        setError(error);
      }
    }, 1000);
  });

  const saveItem = (newItem) => {
    try {
      const strigifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, strigifiedItem);
  
      setItem(newItem);
    } catch(error) {
      setError(error);
    }
  };

  return { 
    item,
    saveItem,
    loading,
    error,
  };
}

function App() {
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage("TODOS_V1", []);
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
    saveTodos(newTodos);
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  // console.log("render (antes del useEffect)")

  // React.useEffect(() => {
  //   console.log('use effect')
  // }, []);

  // console.log("render (despues del useEffect)")

  return (
    <AppUI 
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue} 
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}
    />
  );
}

export default App;
