import React, {useEffect, useState} from "react";
import { Input } from "./styled";

interface IProps {
    getValue: (value: string) => void,
    clickCount: number,
}

const InputComponent = (props: IProps): JSX.Element => {
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

export default InputComponent;