import { AppWrapper } from "./styled";
import TodoList from "../TodoList";
import CreateTodo from "../CreateTodo";
import { nanoid } from "nanoid";
import React, { useState, useEffect, useCallback, memo } from "react";
import ITodo from "./types";
import { cloneShallow } from "../../utilities/cloneShallow";

function App() {
    const [todoArray, setTodoArray] = useState<ITodo[]>([]);

    const addTodo = (value: string): void => {
        let prevArray = cloneShallow(todoArray);
        prevArray.push(
            {
                content: value,
                id: nanoid(),
                checked: false,
            });
        updateTodos(prevArray);
    }

    useEffect(() => {
        try {
            const json: any = localStorage.getItem("todoArray");
            const arrayTodos = JSON.parse(json)
            if (arrayTodos !== null) {
                updateTodos(arrayTodos);
            }
        } catch {
            localStorage.clear();
        }
    },[]);

    const handleDelete = (id: string) => {
        let prevArray = cloneShallow(todoArray);
        let index = prevArray.findIndex(item => item.id === id);
        if (index !== -1) {
            prevArray.splice(index, 1);
            updateTodos(prevArray);
        }
    }

    const updateTodos = (array: ITodo[]) => {
        setTodoArray(array);
        setStorageHandler(array);
    }

    const handleEdit = (id: string, newContent: string) => {
        let prevArray = cloneShallow(todoArray);
        let index = prevArray.findIndex(item => item.id === id);
        if (index !== -1) {
            prevArray[index].content = newContent;
            updateTodos(prevArray);
        }
    }

    const handleCheckbox = (id: string) => {
        let prevArray = cloneShallow(todoArray);
        let index = prevArray.findIndex(item => item.id === id);
        if (index !== -1) {
            prevArray[index].checked = !prevArray[index].checked;
            updateTodos(prevArray);
        }
    }

    const handleMarkAll = () => {
        let prevArray = cloneShallow(todoArray);
        let haveFalse = prevArray.findIndex(item => item.checked === false);
        const flag = haveFalse !== -1;
        prevArray.forEach(item => item.checked = flag);
        updateTodos(prevArray);
    }

    const handleDeleteMarked = () => {
        let prevArray = cloneShallow(todoArray);
        let unmarkedTodos = prevArray.filter(item => item.checked === false);
        updateTodos(unmarkedTodos);
    }

    const setStorageHandler = (todoList: Array<any>): void => localStorage.setItem("todoArray", JSON.stringify(todoList));

  return (
    <AppWrapper>
      <CreateTodo addTodo={ addTodo } />
      <TodoList arrayTodos={ todoArray }
             handleDelete={ handleDelete }
             handleCheckbox={handleCheckbox}
             handleEdit={handleEdit}
             handleMarkAll={handleMarkAll}
             handleDeleteMarked={handleDeleteMarked}
      />
    </AppWrapper>
  );
}

export default memo(App);