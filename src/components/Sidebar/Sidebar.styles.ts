import { styled } from "styled-components";

export const SidebarWrap = styled.div`
  height: 100vh;
  width: 22rem;
  padding: 2rem 0 2rem 3rem;
  background-color: ${(props) => props.theme.palette.white};
`;

export const TitleSidebar = styled.h1`
  margin: 0;
  font-size: 2.4rem;
  text-align: right;
  padding-right: 2.5rem;
`;

export const ListMenu = styled.div`
  margin-top: 3rem;

  .btn-sidebar {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 2rem;
    border-radius: 2rem 0 0 2rem;
  }

  a.active,
  a button.active {
    background-color: ${(props) => props.theme.palette.primary.main};
    display: block;
    border-radius: 2rem 0 0 2rem;
    overflow: hidden;
    color: ${(props) => props.theme.palette.white};
    .btn-sidebar {
      color: inherit;
    }
  }
`;
