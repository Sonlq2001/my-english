import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const WrapContent = styled.div`
  background-color: ${(props) => props.theme.palette.white};
  padding: 2rem;
  > h3 {
    font-size: 2rem;
  }
`;

export const ListData = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 2.4rem;
  flex-wrap: wrap;
`;

export const ItemTopic = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: ${(props) => props.theme.palette.weight.semibold};
  padding: 1rem;
  color: ${(props) => props.theme.palette.gray.black};

  svg {
    margin-right: 1rem;
  }
`;
