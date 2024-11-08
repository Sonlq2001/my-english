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
