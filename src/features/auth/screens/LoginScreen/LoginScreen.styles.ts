import { styled } from "styled-components";

export const WrapLoginScreen = styled.div`
  background-color: #001228;
  height: 100vh;
  display: flex;
`;

export const WrapLoginSocial = styled.div`
  width: 50%;
  color: ${(props) => props.theme.palette.white};
  .inner-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 35rem;
    margin: 0 auto;
    h1 {
      text-align: center;
      font-weight: 500;
      font-size: 4rem;
      margin: 0 0 3rem 0;
    }
    blockquote {
      text-align: center;
      margin-bottom: 5rem;
      font-size: 1.4rem;
      line-height: 2rem;
    }
    .btn-social {
      padding: 1.3rem;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      span {
        font-weight: 500;
      }
      &:hover {
        background-color: ${(props) => props.theme.palette.gray.extraLight};
      }
    }
  }
`;

export const WrapDeco = styled.div`
  position: relative;
  width: 50%;
  img {
    position: absolute;
    max-width: 45rem;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
`;
