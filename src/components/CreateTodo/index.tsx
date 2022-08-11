import React, { useState } from "react";
import InputComponent from "../InputComponent";
import { Wrapper, Button } from "./styled";

type Props = {
    addTodo: (value: string) => void;
}

const CreateTodo = (props: Props): JSX.Element => {
    const [clickCount, setClickCount] = useState<number>(0);
    let inputValue = "";

    const handleClick = (e:React.MouseEvent<HTMLButtonElement>): void => {
        const val = inputValue;
        if (val) {
            props.addTodo(val);
            setClickCount(clickCount + 1);
        }
    }

    const getValue = (value: string): void => {
        inputValue = value;
    }

    return (
        <Wrapper>
            <InputComponent getValue={getValue} clickCount={clickCount}/>
            <Button onClick={handleClick}>Create</Button>
        </Wrapper>
    )
}

export default React.memo(CreateTodo);