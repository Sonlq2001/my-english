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
  gap: 3rem;
  margin-top: 3.5rem;
  .box-image {
    width: 35%;
    img {
      width: 100%;
      border-radius: 1rem;
    }
  }
`;
