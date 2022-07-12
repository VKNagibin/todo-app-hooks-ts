import styled from "styled-components";
import TodoListItem from "./TodoListItem";
import {Button} from "./CreateTodo";

interface IProps {
    arrayTodos: {
        content: string,
        checked: boolean,
        id: string,
    }[],
    handleDelete: (id: string) => void;
    handleEdit: (id: string, newContent: string) => void;
    handleCheckbox: (id: string) => void;
    handleMarkAll: () => void;
    handleDeleteMarked: () => void;
}

const TodoListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`

const TodoList = (props: IProps): JSX.Element | null => {
    const deleteHandler = (id: string) => {
        props.handleDelete(id);
    }

    const deleteMarkedHandler = () => {
        props.handleDeleteMarked();
    }

    const checkboxHandler = (id: string) => {
        props.handleCheckbox(id);
    }

    const editHandler = (id: string, newContent: string) => {
        props.handleEdit(id, newContent);
    }

    const markAllHandler = () => {
        props.handleMarkAll();
    }

    return (
        !props.arrayTodos.length ? null :
    <TodoListStyled>
        {
            props.arrayTodos.map(item => (
                <TodoListItem deleteHandler={deleteHandler}
                              editHandler={editHandler}
                              checkboxHandler={checkboxHandler}
                              content={item.content}
                              key={item.id}
                              id={item.id}
                              checked={item.checked}
                />
            ))
        }
        <Button onClick={deleteMarkedHandler}>Delete marked</Button>
        <Button onClick={markAllHandler}>Mark all</Button>
    </TodoListStyled>
    )
}

export default TodoList;