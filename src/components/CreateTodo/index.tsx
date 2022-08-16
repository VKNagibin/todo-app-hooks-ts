import React, {memo, useState} from "react";
import InputComponent from "../InputComponent";
import { Wrapper, Button } from "./styled";
import IPropsTodoCreate from "./types";


const CreateTodo = (props: IPropsTodoCreate): JSX.Element => {
    const [clickCount, setClickCount] = useState<number>(0);
    let inputValue = "";

    const handleClick = (): void => {
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

export default memo(CreateTodo);