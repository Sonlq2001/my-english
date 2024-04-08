import { styled } from "styled-components";

export const WrapGroupButton = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;

  svg:hover {
    cursor: pointer;
  }

  svg.active-btn {
    color: ${(props) => props.theme.palette.primary.main};
  }
`;
