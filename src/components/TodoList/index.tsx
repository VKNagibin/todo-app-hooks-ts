import ListItem from "../ListItem";
import React, { useCallback } from "react";
import { Button } from "../CreateTodo/styled";
import { Container } from "./styled";
import IPropsTodoList from "./types";
import {memo} from "react";

const TodoList = (props: IPropsTodoList): JSX.Element | null => {
    const deleteHandler = useCallback((id: string) => props.handleDelete(id) ,[props.handleDelete]);

    const deleteMarkedHandler = () => props.handleDeleteMarked();

    const checkboxHandler = (id: string) => props.handleCheckbox(id);

    const editHandler = (id: string, newContent: string) => props.handleEdit(id, newContent);

    const markAllHandler = () => props.handleMarkAll();

    return (
        !props.arrayTodos.length ? null :
    <Container>
        {
            props.arrayTodos.map(item => (
                <ListItem deleteHandler={deleteHandler}
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
    </Container>
    )
}

export default memo(TodoList);