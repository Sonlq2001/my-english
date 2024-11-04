import { styled } from "styled-components";

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

export const ListDataPodcast = styled.ul`
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  list-style-type: none;
`;

export const ItemPodcast = styled.li`
  display: flex;
  align-items: center;
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
      font-size: 1.6rem;
      line-height: 1.8rem;
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
  justify-content: flex-end;
  gap: 6rem;
  flex: 1;
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
