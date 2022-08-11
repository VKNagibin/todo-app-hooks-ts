import React, { memo, useState } from "react";
import InputComponent from "../src/components/InputComponent";
import { Button } from "./styled";
import IProps from "./types";

const CreateTodo = (props: IProps): JSX.Element => {
    // const [clickCount, setClickCount] = useState<number>(0);
    // let inputValue = "";
    //
    // const handleClick = (e:React.MouseEvent<HTMLButtonElement>): void => {
    //     const val = inputValue;
    //     if (val) {
    //         props.addTodo(val);
    //         setClickCount(clickCount + 1);
    //     }
    // }
    //
    // const getValue = (value: string): void => {
    //     inputValue = value;
    // }
    //
    return (
        <Button >Create</Button>
    )
}

export default React.memo(CreateTodo);