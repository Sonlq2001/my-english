import { styled } from "styled-components";

export const WrapFollowChallenge = styled.section`
  margin-top: 3rem;
  border-radius: 2.5rem;
  background-color: ${(props) => props.theme.palette.white};
  padding: 2.5rem 3rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const InnerFollowChallenge = styled.section`
  display: flex;
  gap: 5rem;
  margin-top: 3.5rem;
  background-color: #f2f2f2;
  padding: 2rem;
  border-radius: 2.5rem;
  .box-step,
  .box-image,
  .box-slogan {
    flex: 1;
  }
  .box-image {
    img {
      width: 100%;
      border-radius: 1rem;
    }
  }
  .box-slogan {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
  }
  .box-step {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .step {
      flex: 1;
      display: flex;
      gap: 2rem;
      background-color: ${(props) => props.theme.palette.white};
      padding: 1.5rem;
      border-radius: 1.5rem;
      img {
        width: 8rem;
        height: 8rem;
        border-radius: 1.5rem;
      }
      .step-intro {
        font-size: 1.7rem;
        h3 {
          margin-bottom: 1rem;
        }
        p {
          font-size: 1.5rem;
          color: ${(props) => props.theme.palette.gray.medium};
        }
      }
    }
  }
`;
