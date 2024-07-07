import { styled } from "styled-components";

// export const WrapContent = styled.div`
//   background-color: ${(props) => props.theme.palette.white};
//   padding: 2rem;
//   > h3 {
//     margin-bottom: 1.5rem;
//     padding-bottom: 1.5rem;
//     border-bottom: 1px solid #dfe7e9;
//   }
// `;

// export const ListTopic = styled.div`
//   display: flex;
//   align-items: center;
//   .btn-topic {
//     border-radius: 0;
//     transition: none;
//   }
//   .btn-topic.active {
//     border-bottom: 2px solid ${(props) => props.theme.palette.primary.main};
//   }
// `;

// export const ListPodcast = styled.div`
//   margin-top: 3rem;
//   display: flex;
//   gap: 2rem;
// `;

// new

export const WrapListening = styled.section`
  padding-top: calc(3.5rem + 4rem);
`;

export const BannerListening = styled.section`
  display: flex;
  .box-image {
    width: 70%;
    height: 22rem;
    background-color: #124372;
    position: relative;
    border-radius: 3rem;
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
