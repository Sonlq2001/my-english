import { styled, css } from "styled-components";

export const WrapTextField = styled.div<{ fullWidth?: boolean }>`
  ${({ fullWidth }) => {
    return css`
      display: flex;
      flex-direction: column;
      width: ${fullWidth ? "100%" : "fit-content"};
      label {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }
    `;
  }}
`;

export const Input = styled.input`
  padding: 1.4rem 1.2rem;
  font-size: 1.7rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
`;
