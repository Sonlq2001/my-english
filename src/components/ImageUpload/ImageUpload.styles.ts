import { styled } from "styled-components";

export const WrapImageUpload = styled.div<{ fullWidth?: boolean }>`
  max-width: ${(props) => (props.fullWidth ? "100%" : "40rem")};
  width: 100%;
  .title-upload {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const BoxImageUpload = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  cursor: pointer;
  border: 1px dashed ${(props) => props.theme.palette.primary.main};
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.palette.button.lightBg};
  gap: 1rem;
  font-weight: ${(props) => props.theme.palette.weight.semibold};
  .des-upload {
    text-align: center;
    line-height: 2.4rem;
    color: ${(props) => props.theme.palette.gray.semibold};
  }
  .highlight-upload {
    color: ${(props) => props.theme.palette.primary.main};
    border-bottom: 1px solid ${(props) => props.theme.palette.primary.main};
  }
  svg {
    width: 4rem;
    height: 4rem;
    path {
      color: ${(props) => props.theme.palette.gray.semibold};
    }
  }
  .warning-upload {
    font-size: 1.4rem;
    color: ${(props) => props.theme.palette.gray.medium};
  }
`;
