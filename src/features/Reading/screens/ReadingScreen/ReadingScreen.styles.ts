import { styled } from "styled-components";

export const WrapContentReading = styled.div`
  background-color: ${(props) => props.theme.palette.white};
  padding: 2rem;
`;

export const LayoutReading = styled.div`
  display: flex;
`;

export const ColumnLeft = styled.div`
  flex: 1;
`;

export const ColumnRight = styled.div`
  width: 20rem;
`;

export const ListArticle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`;
