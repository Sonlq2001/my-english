import { styled } from "styled-components";

export const WrapItemTopic = styled.li`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 8px 10px;
  background-color: ${(props) => props.theme.palette.gray.extraLight};
  border-radius: 3rem;
  cursor: pointer;
  span {
    font-weight: 500;
    font-size: 1.5rem;
  }
  &.active {
    background-color: #b8040433;
  }
`;
