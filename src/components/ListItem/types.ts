export default interface IProps {
    id: string;
    content: string;
    checked: boolean;
    deleteHandler: (id: string) => void;
    editHandler: (id: string, newContent: string) => void;
    checkboxHandler: (id: string) => void;
}