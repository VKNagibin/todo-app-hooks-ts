import styled from "styled-components";

export const ListItem = styled.li`
  padding: 20px;
  border: 2px solid rgba(103, 101, 101, 0.53);   
  display: flex;
  column-gap: 20px;
  align-items: center;
  width: 500px;

  &.checked p {
    text-decoration: line-through;
  }

  &.checked {
    opacity: .3;
  }

`;

export const Paragraph = styled.p`
  font-size: 1.3rem;
  width: 60%;
  overflow: auto;
`;

export const Checkbox = styled.input.attrs({type: "checkbox"})`
    transform: scale(200%);
    cursor: pointer;
`

export const BtnGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`