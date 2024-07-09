import { styled } from "styled-components";

export const WrapPodcastList = styled.section`
  margin-top: 3rem;
  border-radius: 2.5rem;
  background-color: ${(props) => props.theme.palette.white};
  padding: 2.5rem 3rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  .btn-see-all {
    color: #111111;
    border: 1px solid ${(props) => props.theme.palette.gray.extraLight};
    transition: none;
    &:hover {
      background-color: transparent;
      border: 1px solid ${(props) => props.theme.palette.primary.main};
    }
  }
`;

export const ListDataPodcast = styled.section`
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ItemPodcast = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  padding: 8px;
  border-radius: 5px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #f4edff;
  }
  .info-podcast {
    display: flex;
    gap: 1.5rem;
    img {
      width: 5rem;
      height: 5rem;
      border-radius: 8px;
    }
    .text-podcast {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .title-podcast {
      font-weight: 500;
    }
    .auth-podcast {
      font-size: 1.4rem;
      color: ${(props) => props.theme.palette.gray.medium};
    }
  }
`;

export const ActionPodcast = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;
  span {
    font-size: 1.5rem;
    color: ${(props) => props.theme.palette.gray.medium};
    font-weight: 500;
  }
  .svg-star {
    color: #d0a81b;
  }
  .svg-play {
    color: ${(props) => props.theme.palette.primary.main};
    width: 3rem;
    height: 3rem;
  }
`;
