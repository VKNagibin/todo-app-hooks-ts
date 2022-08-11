import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border: 2px solid rgba(103, 101, 101, 0.53);
`

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
