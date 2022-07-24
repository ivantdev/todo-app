
import React from "react";
import { AppUI } from './AppUI';
import { TodoProvider } from './TodoContext';

// const  defaultTodos  = [
//   { text: "Sembrar zanahoria", priority: "high", completed: false},
//   { text: "Comer mangos", priority: "medium", completed: false},
//   { text: "Devorar más manzanas", priority: "low", completed: false},
//   { text: "Cortar cebolla", priority: "high", completed: false},
//   { text: "Comer manzanas", priority: "medium", completed: true},
// ];

function App() {
  // console.log("render (antes del useEffect)")

  // React.useEffect(() => {
  //   console.log('use effect')
  // }, []);

  // console.log("render (despues del useEffect)")

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
