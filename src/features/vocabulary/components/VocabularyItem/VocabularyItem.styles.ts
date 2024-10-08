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
    max-width: 5rem;
    width: 100%;
    height: 5rem;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.palette.gray.extraLight};
  }

  .vocabulary-info {
    flex-grow: 1;
    margin-right: 2.5rem;
    p {
      font-style: italic;
      margin-top: 0.5rem;
      white-space: nowrap;
    }
  }

  .vocabulary-mean {
    font-weight: ${(props) => props.theme.palette.weight.semibold};
    max-width: 15rem;
    line-height: 2.5rem;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
