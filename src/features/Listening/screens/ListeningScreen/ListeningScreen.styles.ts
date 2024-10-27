import { styled } from "styled-components";

export const WrapListening = styled.main`
  padding-top: calc(3.5rem + 4rem);
`;

export const BannerListening = styled.section`
  display: flex;
  gap: 4rem;
  .box-image {
    width: 100%;
    max-width: 70%;
    height: 20rem;
    background-color: #124372;
    position: relative;
    border-radius: 2.5rem;
    img {
      position: absolute;
      right: 4rem;
      top: -5.5rem;
      height: 100%;
    }
    .content-banner {
      max-width: 60%;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-left: 4rem;
      color: ${(props) => props.theme.palette.white};
      gap: 1.5rem;
      h1 {
        margin: 0;
      }
      p {
        line-height: 2.5rem;
      }
    }
  }
`;

export const BoxUser = styled.div`
  display: flex;
  gap: 1.5rem;
  flex: 1;
  padding: 2.5rem;
  border-radius: 2.5rem;
  background-color: ${(props) => props.theme.palette.white};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  img {
    width: 6rem;
    height: 6rem;
    border-radius: 40%;
  }
  .user-info {
    margin-top: 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .total-podcast {
      font-size: 1.4rem;
      color: ${(props) => props.theme.palette.gray.medium};
    }
    .list-icon {
      margin-top: 2rem;
      display: flex;
      gap: 1rem;
      svg {
        border-radius: 50%;
        padding: 3px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }
    }
  }
`;
