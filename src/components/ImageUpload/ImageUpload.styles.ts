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
  position: relative;
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
  .show-image {
    max-width: 100%;
    width: auto;
    max-height: 20rem;
    height: 100%;
  }
  .btn-clear {
    position: absolute;
    top: 1rem;
    right: 1rem;
    line-height: 0;
    border-radius: 50%;
    padding: 0.4rem;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;
