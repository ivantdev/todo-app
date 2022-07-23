import React from "react";

import './App.css';

import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

import { TodoHeader } from "./TodoHeader";
function AppUI( { totalTodos, completedTodos, searchValue, setSearchValue, searchedTodos, completeTodos, deleteTodos } ) {
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

export { AppUI };