import { styled } from "styled-components";

export const BannerSectionWrap = styled.div`
  background-color: ${(props) => props.theme.palette.white};
  padding: 0 2rem;
`;

export const BannerContent = styled.div`
  display: flex;
  align-items: center;
  max-height: 30rem;
  height: 100%;
  overflow: hidden;
  position: relative;

  .banner-image {
    height: 100%;
    max-width: 80rem;
    width: 100%;
    margin-left: 10rem;
  }
`;

export const BannerText = styled.div`
  position: absolute;
  margin-top: -5rem;
  h1 {
    font-size: 3rem;
    margin: 0;
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 2rem;
    line-height: 3rem;
  }
`;
