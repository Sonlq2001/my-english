import { styled } from "styled-components";

export const WrapContentContainer = styled.section`
  background-color: ${(props) => props.theme.palette.white};
  border-radius: 2.5rem;
  padding: 2.5rem 3rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  h1 {
    font-size: 2.4rem;
    margin: 0;
  }
`;
