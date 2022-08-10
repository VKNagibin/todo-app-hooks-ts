import styled from "styled-components";
import {Button} from "./CreateTodo";
import React from "react";

const ListItem = styled.li`
  padding: 20px;
  border: 2px solid rgba(103, 101, 101, 0.53);   
  display: flex;
  column-gap: 20px;
  align-items: center;
  width: 500px;

  &.checked p {
    text-decoration: line-through;
  }

  &.checked {
    opacity: .3;
  }

`;

const Paragraph = styled.p`
  font-size: 1.3rem;
  width: 60%;
  overflow: auto;
`;

const Checkbox = styled.input.attrs({type: "checkbox"})`
    transform: scale(200%);
    cursor: pointer;
`

const BtnGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`

interface IProps {
    id: string;
    content: string;
    checked: boolean;
    deleteHandler: (id: string) => void;
    editHandler: (id: string, newContent: string) => void;
    checkboxHandler: (id: string) => void;
}

const TodoList = (props: IProps): JSX.Element => {
    const handleDelete = () => {
        props.deleteHandler(props.id);
    };

    const handleEdit = () => {
        let promptValue = prompt("Edit task");
        if (promptValue !== null &&
            promptValue.trim() !== '' &&
            promptValue !== props.content) {
            props.editHandler(props.id, promptValue);
        }
    };

    const handleCheckbox = () => {
        props.checkboxHandler(props.id);
    }

    return(
    <ListItem className={props.checked ? "checked": ""}>
        <Checkbox onChange={handleCheckbox} checked={props.checked}/>
        <Paragraph>
            {props.content}
        </Paragraph>
        <BtnGroup>
            <Button onClick={handleEdit}>Edit</Button>
            <Button onClick={handleDelete}>Delete</Button>
        </BtnGroup>
    </ListItem>
    )

}

export default TodoList;