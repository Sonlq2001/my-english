import { styled } from "styled-components";

export const WrapContent = styled.div`
  display: flex;
  gap: 3rem;
  padding-top: 3rem;
`;

export const SectionInfo = styled.section`
  position: sticky;
  top: 3rem;
  height: 100%;
  h1 {
    margin: 0;
    font-size: 2.4rem;
    line-height: 3rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.3rem;
    color: ${(props) => props.theme.palette.gray.medium};
  }
  .btn-play {
    margin-top: 1rem;
    background-color: transparent;
    svg {
      width: 5rem;
      height: 5rem;
    }
  }
`;

export const SectionContent = styled.section`
  line-height: 2.5rem;
  background-color: ${(props) => props.theme.palette.white};
  border-radius: 5px;
  padding: 2rem;
  flex: 1;
`;

export const ListTranscript = styled.div`
  line-height: 2.5rem;
  span {
    cursor: pointer;
    margin-right: 3px;
    padding: 0.3rem;
    border-radius: 0.5rem;
    word-break: break-word;
    &:hover {
      background-color: #febf0040;
    }
  }
  & .active-transcript {
    background-color: #fcdbdc;
  }
`;
