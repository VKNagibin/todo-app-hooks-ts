import styled from "styled-components";
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";
import {nanoid} from "nanoid";
import {useState, useEffect} from "react";

const AppWrapper = styled.div.attrs({className: "App"})`
  padding: 20px;
  width: 100%;
  min-height: 100vh;
  background: rgba(134, 190, 208, 0.18);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`

function App() {
    const [todoArray, setTodoArray] = useState<{content: string, id: string, checked: boolean}[]>([]);
    const addTodo = (value: string): void => {
        let prevArray = todoArray.slice();
        prevArray.push(
            {
                content: value,
                id: nanoid(),
                checked: false,
            });
        setTodoArray(prevArray);
        setStorageHandler(prevArray);
    }

    useEffect(() => {
        try {
            let json: any = localStorage.getItem("todoArray");
            json = JSON.parse(json)
            if (json !== null) {
                setTodoArray(json)
            }
        } catch {
            localStorage.clear();
        }
    },[]);

    const handleDelete = (id: string) => {
        let prevArray = todoArray.slice();
        let index = prevArray.findIndex(item => item.id === id);
        if (index !== -1) {
            prevArray.splice(index, 1);
            setTodoArray(prevArray);
            setStorageHandler(prevArray);
        }
    }

    const handleEdit = (id: string, newContent: string) => {
        let prevArray = todoArray.slice();
        let index = prevArray.findIndex(item => item.id === id);
        if (index !== -1) {
            prevArray[index].content = newContent;
            setTodoArray(prevArray);
            setStorageHandler(prevArray);
        }
    }

    const handleCheckbox = (id: string) => {
        let prevArray = todoArray.slice();
        let index = prevArray.findIndex(item => item.id === id);
        if (index !== -1) {
            prevArray[index].checked = !prevArray[index].checked;
            setTodoArray(prevArray);
        }
    }

    const handleMarkAll = () => {
        let prevArray = todoArray.slice();
        let haveFalse = prevArray.findIndex(item => item.checked === false);
        if (haveFalse !== -1) {
            prevArray.forEach(item => item.checked = true);
        } else {
            prevArray.forEach(item => item.checked = false);
        }
        setTodoArray(prevArray);
    }

    const handleDeleteMarked = () => {
        let prevArray = todoArray.slice();
        let unmarkedTodos = prevArray.filter(item => item.checked === false);
        setTodoArray(unmarkedTodos);
        setStorageHandler(unmarkedTodos);

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

export default App;