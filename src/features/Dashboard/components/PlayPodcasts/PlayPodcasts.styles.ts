import { styled } from "styled-components";

export const WrapPlayPodcasts = styled.article`
  margin-top: 3rem;
`;

export const BoxPlayer = styled.div`
  margin-top: 2rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  .inner-player {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    max-width: 70%;
    width: 100%;
    border-radius: 1rem;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  }
  h4 {
    margin: 1.5rem 0 1rem 0;
  }
  p {
    font-size: 1.4rem;
    color: ${(props) => props.theme.palette.gray.medium};
  }
`;

export const WrapControlPlayer = styled.article`
  display: flex;
  align-items: center;
  border-top: 1px solid #ddd;
  padding: 3rem;
  justify-content: center;
  gap: 2rem;
  svg {
    cursor: pointer;
  }
  svg.icon-play-back-right {
    transform: rotate(180deg);
  }
  svg.icon-play {
    width: 4.5rem;
    height: 4.5rem;
    color: ${(props) => props.theme.palette.primary.main};
  }
`;
