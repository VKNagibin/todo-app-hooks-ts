import ListItem from "../ListItem";
import { Button } from "../CreateTodo/styled";
import { Container } from "./styled";
import IProps from "./types";

const Index = (props: IProps): JSX.Element | null => {
    const deleteHandler = (id: string) => props.handleDelete(id);

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

export default Index;