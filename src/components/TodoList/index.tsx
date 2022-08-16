import ListItem from "../ListItem";
import React from "react";
import { Button } from "../CreateTodo/styled";
import { Container } from "./styled";
import IPropsTodoList from "./types";
import {memo} from "react";

const TodoList = (props: IPropsTodoList): JSX.Element | null => {
    return (
        !props.arrayTodos.length ? null :
    <Container>
        {
            props.arrayTodos.map(item => (
                <ListItem deleteHandler={props.handleDelete}
                       editHandler={props.handleEdit}
                       checkboxHandler={props.handleCheckbox}
                       content={item.content}
                       key={item.id}
                       id={item.id}
                       checked={item.checked}
                />
            ))
        }
        <Button onClick={props.handleDeleteMarked}>Delete marked</Button>
        <Button onClick={props.handleMarkAll}>Mark all</Button>
    </Container>
    )
}

export default memo(TodoList);