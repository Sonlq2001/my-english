import { styled } from "styled-components";

export const WrapCustomizeText = styled.div`
  textarea {
    border: none;
    outline: none;
    width: 100%;
    resize: none;
    background-color: ${(props) => props.theme.palette.gray.extraLight};
    padding: 1.5rem;
    border-radius: 0.5rem;
    line-height: 2.5rem;
  }

  .wrap-content {
    display: flex;
    gap: 3rem;
  }
  .width-textarea {
    max-width: 60%;
  }
  .transcript-text {
    max-width: 40%;
    width: 100%;
  }
`;
