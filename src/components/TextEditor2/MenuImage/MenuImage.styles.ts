import { styled } from "styled-components";

export const TabHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.palette.gray.extraLight};
  border-radius: 1rem;
  justify-content: space-between;
  .btn-tab {
    width: 50%;
    padding: 0.8rem;
    border-radius: 1rem;
    font-weight: 500;
    color: ${(props) => props.theme.palette.gray.medium};
  }
  .btn-tab.tab-active {
    background-color: ${(props) => props.theme.palette.white};
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

export const ContentTabs = styled.div`
  margin-top: 2.5rem;
`;
