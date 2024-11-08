import { styled } from "styled-components";

export const WrapTopicList = styled.section`
  margin-top: 3rem;
  border-radius: 2.5rem;
  background-color: ${(props) => props.theme.palette.white};
  padding: 2.5rem 3rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .control-carousel {
    display: flex;
    gap: 1rem;
    svg {
      border: 1px solid ${(props) => props.theme.palette.gray.extraLight};
      border-radius: 5px;
      padding: 5px;
      width: 3.5rem;
      height: 3.5rem;
      cursor: pointer;
      user-select: none;
      &:hover {
        border: 1px solid ${(props) => props.theme.palette.primary.main};
      }
    }
  }
`;

export const WrapCarousel = styled.div`
  margin-top: 3.5rem;
  .slick-slider {
    max-width: calc(100vw - 22rem - 8rem - 7rem);
    width: auto;
    overflow: hidden !important;
    margin-left: -8px;
    .slick-list {
      padding: 0 !important;
    }
    .slick-slide {
      margin: 0 8px;
    }
    .slick-track {
      display: flex;
    }
  }
`;

export const ItemCarousel = styled.article`
  display: flex !important;
  flex-direction: column;
  gap: 7px;
  font-size: 1.5rem;
  p {
    font-size: 1.3rem;
    color: ${(props) => props.theme.palette.gray.medium};
    display: flex;
    gap: 0.5rem;
    a:hover {
      text-decoration: underline;
    }
  }
  .cate-image {
    position: relative;
    padding-top: 70%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 2rem;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
`;
