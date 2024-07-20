import { styled } from "styled-components";

export const WrapItemTopic = styled.article<{ color: string }>`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 8px 10px;
  background-color: ${(props) => props.color};
  border-radius: 3rem;
  span {
    font-weight: 500;
    font-size: 1.5rem;
  }
`;
