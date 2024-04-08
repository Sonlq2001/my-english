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
        width: fit-content;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .label-require {
        color: red;
        font-size: 1.8rem;
      }
      /* css error */
      &.error {
        .input-field {
          border: 1px solid red;
          &:focus {
            outline: none;
          }
        }
      }
    `;
  }}
`;

export const Input = styled.input`
  padding: 1.4rem 1.2rem;
  font-size: 1.7rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  &::placeholder {
    font-size: 1.6rem;
    color: ${(props) => props.theme.palette.gray.medium};
  }
`;
