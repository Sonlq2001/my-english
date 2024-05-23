import { styled } from "styled-components";

export const WrapModalTranslate = styled.div`
  z-index: 10;
  border-radius: 1rem;
  max-width: 30rem;
  width: 100%;
  background-color: ${(props) => props.theme.palette.white};
  overflow: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  .header-modal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.palette.gray.extraLight};
    padding: 1rem 2rem;

    .btn-close {
      width: 2.5rem;
      height: 2.5rem;
      min-width: auto;
    }
  }
`;

export const BodyModal = styled.div`
  padding: 2rem;
  .key-vocabulary {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-weight: ${(props) => props.theme.palette.weight.semibold};
    font-size: 1.8rem;
    svg {
      cursor: pointer;
    }
  }

  .type-vocabulary {
    font-size: 1.5rem;
    font-style: italic;
    color: ${(props) => props.theme.palette.gray.semibold};
    margin-top: 0.5rem;
  }

  .meanings {
    padding-left: 2rem;
    margin-top: 3rem;
    li + li {
      margin-top: 1.5rem;
      font-size: 1.5rem;
    }
  }
`;
