import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Vocabulary = styled(Link)`
  color: ${(props) => props.theme.palette.gray.black};
  display: flex;
  gap: 1.6rem;
  border-bottom: 1px solid #ddd;
  padding: 1rem 0.5rem;
  transition: ease 0.3s;

  &:hover {
    background-color: #f4f4f4;
  }

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }

  .vocabulary-info {
    flex-grow: 1;
    p {
      font-style: italic;
      margin-top: 0.5rem;
    }
  }

  .vocabulary-mean {
    font-weight: ${(props) => props.theme.palette.weight.semibold};
  }
`;
