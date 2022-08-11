import styled from "styled-components";

export const Button = styled.button`
  will-change: transform;
  padding: 10px;
  transition: .3s transform;
  cursor: pointer;
  background: white;
  
  &:hover {
    transform: scale(105%);
  }
`