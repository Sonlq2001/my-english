import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const WrapNotepadSection = styled(Link)`
  display: block;
  color: ${(props) => props.theme.palette.gray.black};
  h3 {
    font-size: 1.6rem;
  }
  & + & {
    border-top: 1px solid #eee;
    margin-top: 1rem;
    padding-top: 1rem;
  }
  .info-notepad {
    margin-top: 0.8rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    font-size: 1.4rem;
    .des-notepad {
      color: ${(props) => props.theme.palette.gray.semibold};
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
`;
