export default interface IProps {
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