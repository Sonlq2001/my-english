import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const WrapNotepadSection = styled(Link)`
  color: ${(props) => props.theme.palette.gray.black};
  display: flex;
  align-items: center;
  padding: 0.8rem;
  transition: 0.3s ease;
  gap: 1.5rem;
  .content {
    flex: 1;
  }
  h3 {
    font-size: 1.6rem;
  }
  & + & {
    border-top: 1px solid #eee;
  }
  &:hover {
    background-color: ${(props) => props.theme.palette.gray.thin};
    .controls {
      opacity: 1;
      visibility: visible;
    }
  }
  .info-notepad {
    margin-top: 0.8rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    font-size: 1.4rem;
    .date {
      white-space: nowrap;
    }
    .des-notepad {
      color: ${(props) => props.theme.palette.gray.semibold};
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
  .controls {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    opacity: 0;
    visibility: hidden;
    padding: 0.5rem 1rem;
    transition: 0.3s ease;
    &:hover {
      cursor: default;
    }
    svg:first-child {
      width: 2rem;
      height: 2rem;
    }
    svg {
      opacity: 0.6;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export const ContentConfirm = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: red;
  svg {
    width: 3rem;
    height: 3rem;
  }
`;
