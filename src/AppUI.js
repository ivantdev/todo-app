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
          {loading && <p className="main__info">Working on...</p>}
          {!loading && !searchedTodos.length && <p className="main__info">Create your first ToDo!</p>}
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              priority={todo.priority}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

        {!!openModal && (<Modal>
          <p className="">Teletransportación</p>
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