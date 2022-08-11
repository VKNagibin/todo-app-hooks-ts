import React, {memo} from "react";
import IProps from "./types";
import { Checkbox, ListItem, Paragraph, BtnGroup } from "./styled";
import { Button } from "../CreateTodo/styled";

const TodoListItem = (props: IProps): JSX.Element => {
    const handleDelete = () => props.deleteHandler(props.id);

    const handleEdit = () => {
        let promptValue = prompt("Edit task");
        if (promptValue !== null &&
            promptValue.trim() !== '' &&
            promptValue !== props.content) {
            props.editHandler(props.id, promptValue);
        }
    };

    const handleCheckbox = () => props.checkboxHandler(props.id);

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

export default memo(TodoListItem);