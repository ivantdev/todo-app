import React from "react";

import './App.css';
import { TodoContext } from "./TodoContext";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoHeader } from "./TodoHeader";
import { Modal } from './modal';
import { TodoForm } from "./TodoForm";
import { TodoLoading } from "./TodoLoading";


function AppUI() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoHeader />
      <div className="main__container">
        <TodoCounter />

        <TodoSearch />

        <TodoList>
          {error && <p className="main__info">Oops, error...</p>}
          {loading && <TodoLoading /> }
          {!loading && !searchedTodos.length && <p className="main__info">Create a ToDo!</p>}
          {searchedTodos.map((todo, i) => (
            <TodoItem
              key={`${todo.text}+${i}`}
              text={todo.text}
              completed={todo.completed}
              priority={todo.priority}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

        {!!openModal && (<Modal>
          <TodoForm></TodoForm>
        </Modal>)}

        <CreateTodoButton 
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
      </div>
    </React.Fragment>
  );
}

export { AppUI };