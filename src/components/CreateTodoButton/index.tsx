import React, { memo } from "react";
import { Button } from "./styled";

const CreateTodo = (): JSX.Element => {
    return (
        <Button >Create</Button>
    )
}

export default memo(CreateTodo);