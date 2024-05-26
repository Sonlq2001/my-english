import { styled } from "styled-components";

export const WrapWritingModel = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme.palette.white};
  > h3 {
    margin: 2rem 0 3rem 0;
  }
`;

export const ListAction = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const ExampleWriting = styled.div`
  margin-top: 2rem;
  display: inline-block;
  .list-action-example {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    gap: 2rem;
    svg {
      cursor: pointer;
    }
  }
  .example-paragraph {
    background-color: ${(props) => props.theme.palette.gray.extraLight};
    display: inline-block;
    padding: 1.5rem;
    border-radius: 0.5rem;
  }
`;

export const WrapTextarea = styled.div`
  margin-top: 4rem;
  border-top: 1px solid #eee;
  padding-top: 2rem;
  textarea {
    border: none;
    outline: none;
    resize: none;
    width: 100%;
  }
`;
