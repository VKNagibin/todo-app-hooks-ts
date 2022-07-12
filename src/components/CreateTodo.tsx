import styled from "styled-components";
import {useState} from "react";
export {Button};

const Wrapper = styled.div`
  padding: 30px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border: 2px solid rgba(103, 101, 101, 0.53);
`

const Input = styled.input.attrs({type: "text", placeholder: "What to do"})`
  padding: 10px;
  will-change: transform;
  transition: .3s transform;

  &:hover {
    transform: scale(105%);
  }
`

const Button = styled.button`
  will-change: transform;
  padding: 10px;
  transition: .3s transform;
  cursor: pointer;
  background: white;
  
  &:hover {
    transform: scale(105%);
  }
`

type Props = {
    addTodo: (value: string) => void;
}

const CreateTodo = (props: Props): JSX.Element => {
    const [value, setValue] = useState<string>('');
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>): void => {
        if (value !== "") {
            props.addTodo(value);
            setValue('');
        }
    }

    return (
        <Wrapper>
            <Input onChange={(e:React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)} value={value}/>
            <Button onClick={handleClick}>Create</Button>
        </Wrapper>
    )
}

export default CreateTodo;