import React, {memo, useEffect, useState} from "react";
import { Input } from "./styled";
import IPropsTodoInput from "./types";


const InputComponent = (props: IPropsTodoInput): JSX.Element => {
    const [value, setValue] = useState<string>('');

    const changeHandler = (e:React.ChangeEvent<HTMLInputElement> ) => {
        setValue(e.currentTarget.value);
        props.getValue(e.currentTarget.value);
    }

    useEffect(() => {
        setValue('')
    } , [props.clickCount]);

    return (
        <Input onChange={(e) => changeHandler(e)} value={value}/>
    )
}

export default memo(InputComponent);