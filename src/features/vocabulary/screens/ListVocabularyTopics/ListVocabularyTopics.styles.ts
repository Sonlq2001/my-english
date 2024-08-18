import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const WrapContentListTopics = styled(Link)`
  display: inline-block;
  padding-top: 3.5rem;
`;

export const InnerContentList = styled.section`
  margin-top: 3.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 3rem;
  width: 100%;
`;
