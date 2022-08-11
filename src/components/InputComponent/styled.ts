import styled from "styled-components";

export const Input = styled.input.attrs({type: "text", placeholder: "What to do"})`
  padding: 10px;
  will-change: transform;
  transition: .3s transform;

  &:hover {
    transform: scale(105%);
  }
`