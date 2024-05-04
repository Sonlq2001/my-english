import { styled } from "styled-components";

export const WrapMenuHeading = styled.div`
  background-color: ${(props) => props.theme.palette.white};
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .btn-heading {
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: transparent;
    padding: 0.8rem 1rem;
    border-radius: 0.5rem;
    &:hover {
      background-color: #cbe5ff;
    }
  }

  .btn-heading.is-active {
    background-color: #cbe5ff;
  }
`;
