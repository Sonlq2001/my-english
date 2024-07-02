import { styled } from "styled-components";

export const DashboardWrap = styled.div`
  display: flex;
`;

export const ContentLeft = styled.section`
  flex: 1;
  border-right: 1px solid #eee;
`;

export const ContentRight = styled.section`
  max-width: 40rem;
  width: 100%;
  padding: 2.5rem;
`;

export const WrapPodcast = styled.section`
  padding: 2.5rem;
  > h3 {
    font-weight: 500;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #eee;
  }
  .list-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const SectionPodcast = styled.article`
  display: flex;
  align-items: center;
  gap: 3rem;
  .index-podcast {
    font-weight: 500;
  }
  .content-podcast {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 2rem;
    img {
      width: 5rem;
      height: 5rem;
      border-radius: 1rem;
    }
    .info-podcast {
      display: flex;
      flex-direction: column;
      gap: 8px;
      span {
        font-size: 1.4rem;
        color: ${(props) => props.theme.palette.gray.medium};
      }
    }
  }
  .time-podcast {
    display: flex;
    align-items: center;
    gap: 1rem;
    svg {
      color: ${(props) => props.theme.palette.gray.medium};
    }
  }
`;

export const TabsFavorite = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #f5f5f5;
  padding: 5px;
  border-radius: 2rem;
  margin: 1.5rem 0 2rem 0;
  button {
    flex: 1;
    padding: 0.8rem 1.6rem;
    border-radius: 2rem;
    font-weight: 500;
    background-color: transparent;

    &.active {
      color: ${(props) => props.theme.palette.primary.main};
      background-color: ${(props) => props.theme.palette.white};
    }
  }
`;
