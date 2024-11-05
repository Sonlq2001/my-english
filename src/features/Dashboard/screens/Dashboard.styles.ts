import { styled } from "styled-components";

export const DashboardWrap = styled.main`
  display: flex;
`;

export const ContentLeft = styled.section`
  flex: 1;
  border-right: 1px solid #eee;
  background-color: #fbfbfc;
  min-height: calc(100vh - 5.4rem);
`;

export const ContentRight = styled.section`
  max-width: 35rem;
  width: 100%;
  padding: 2.5rem;
`;

export const WrapPodcast = styled.section`
  > h3 {
    font-weight: 500;
    padding: 0 3rem;
  }
  .list-section {
    margin-top: 1.5rem;
  }
`;

export const SectionPodcast = styled.li`
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 1rem 3rem;
  &:hover {
    background-color: ${(props) => props.theme.palette.white};
  }
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

export const LabelChipTypePodcast = styled.span<{ type: "VIDEO" | "AUDIO" }>`
  font-size: 1.3rem;
  margin-right: 5rem;
  text-transform: lowercase;
  border-radius: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: ${(props) =>
    props.type === "VIDEO" ? "#b8040433" : "#2d849f33"};
  &:first-letter {
    text-transform: uppercase;
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
