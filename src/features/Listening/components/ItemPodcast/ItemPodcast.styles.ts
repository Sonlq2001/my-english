import { styled } from "styled-components";

export const WrapContentPodcast = styled.div`
  position: relative;
  max-width: 25rem;
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  color: ${(props) => props.theme.palette.white};
  img {
    width: 100%;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(218, 24, 15);
    background: linear-gradient(
      150deg,
      rgba(218, 24, 15, 1) 0%,
      rgba(223, 111, 5, 1) 100%
    );
    opacity: 0.9;
  }
`;

export const ContentPodcast = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  padding: 2.5rem 3rem;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
  }
`;

export const ContentThumbnail = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  svg {
    width: 4rem;
    height: 4rem;
  }
  .image-thumbnail {
    width: 5rem;
    height: 5rem;
    border: 3px solid ${(props) => props.theme.palette.white};
    border-radius: 0.3rem;
  }
`;
