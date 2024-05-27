import { styled } from "styled-components";

export const WrapNotepad = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme.palette.white};
  .row-header {
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .btn-add {
      padding: 0.8rem 1.6rem;
    }
  }
`;

export const ListNotepad = styled.div``;
