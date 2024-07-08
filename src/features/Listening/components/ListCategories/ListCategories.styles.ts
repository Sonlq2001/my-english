import { styled } from "styled-components";

export const WrapListCategories = styled.div`
  margin-top: 3rem;
  border-radius: 2.5rem;
  background-color: ${(props) => props.theme.palette.white};
  padding: 2.5rem 3rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const HeaderBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
