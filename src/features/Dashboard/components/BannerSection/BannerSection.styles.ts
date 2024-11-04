import { styled } from "styled-components";

export const BannerSectionWrap = styled.div`
  padding: 4rem 3rem;
`;

export const BannerContent = styled.div`
  position: relative;
  background-color: #9bc0eb;
  margin-top: 1.5rem;
  padding: 2.5rem 3rem;
  border-radius: 2rem;
  position: relative;
  color: ${(props) => props.theme.palette.white};
  .banner-start {
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.3);
    padding: 6px 10px;
    border-radius: 2rem;
    width: fit-content;
    font-size: 1.2rem;
    gap: 8px;
    color: ${(props) => props.theme.palette.gray.extrabold};
    .icon-star {
      background-color: #fff16d45;
      line-height: 0;
      border-radius: 100%;
      padding: 4px;
    }
    svg {
      color: #fae94d;
    }
  }
  .icon-banner {
    width: 1.5rem;
    height: 1.5rem;
  }
  .title-banner {
    font-size: 3rem;
    margin: 1.8rem 0;
  }
  .banner-heart {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.2rem;
    .icon-heart {
      line-height: 0;
      background-color: #50e270;
      border-radius: 100%;
      padding: 4px;
    }
    svg {
      color: ${(props) => props.theme.palette.white};
    }
  }
  .btn-listen {
    margin-top: 2rem;
    padding: 1.5rem 3rem;
    border-radius: 2.5rem;
    font-weight: 600;
    color: ${(props) => props.theme.palette.white};
    background-color: ${(props) => props.theme.palette.primary.main};
    display: inline-block;
  }
  .img-rock-band {
    position: absolute;
    max-width: 25rem;
    right: 4rem;
    bottom: 0;
    z-index: 0;
  }
`;

export const DecoBanner = styled.section`
  .firework1,
  .firework2,
  .firework3 {
    position: absolute;
  }
  .firework1 {
    top: 25%;
    left: 40%;
  }
  .firework2 {
    top: 55%;
    left: 30%;
  }
  .firework3 {
    top: 70%;
    left: 50%;
  }
  svg {
    position: absolute;
  }
  .icon-fireworks {
    width: 3rem;
    height: 3rem;
  }
`;
