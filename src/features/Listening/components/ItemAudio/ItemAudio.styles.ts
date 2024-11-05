import { styled } from "styled-components";

export const ThumbnailVideo = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  svg {
    position: absolute;
    color: ${(props) => props.theme.palette.white};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    opacity: 0;
  }
  img {
    width: 5rem;
    height: 5rem;
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(94, 94, 94, 0.7);
    opacity: 0;
  }
`;

export const WrapItemAudio = styled.li`
  display: flex;
  gap: 1rem;
  padding: 0.8rem;
  border-radius: 0.5rem;
  align-items: center;
  &:hover {
    background-color: #fbfbfb;

    /* type AUDIO */
    span {
      display: none;
    }

    /* type VIDEO */
    svg,
    ${ThumbnailVideo}::after {
      opacity: 1;
      transition: linear 0.2s;
    }
  }
  .link-audio:hover {
    text-decoration: underline;
  }
  h3 {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.8rem;
    margin-bottom: 0.8rem;
  }
  p {
    font-size: 1.4rem;
    color: ${(props) => props.theme.palette.gray.medium};
  }
`;

export const IndexList = styled.div`
  padding: 0 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  & > * {
    position: absolute;
  }
  svg {
    opacity: 0;
  }
`;
