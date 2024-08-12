import { styled } from "styled-components";

export const SidebarWrap = styled.div`
  min-height: 100vh;
  min-width: 22rem;
  padding: 2rem 0;
  background-color: ${(props) => props.theme.palette.white};
  position: relative;
  display: flex;
  flex-direction: column;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: -2px;
    bottom: 0;
    width: 1px;
    height: 100%;
    background-color: #f1f1f1;
  }
`;

export const TitleSidebar = styled.h1`
  margin: 0;
  font-size: 2.4rem;
  text-align: right;
  padding-right: 2.5rem;
`;

export const ListMenu = styled.div`
  margin-top: 5rem;
  flex: 1;

  .btn-sidebar {
    width: 100%;
    padding-top: 8px;
    padding-bottom: 8px;
    justify-content: flex-start;
    color: #46465d;
  }

  a button.btn-active {
    overflow: hidden;
    color: ${(props) => props.theme.palette.primary.main};
    border-right: 3px solid ${(props) => props.theme.palette.primary.main};
    border-radius: 0;
    .btn-sidebar {
      color: inherit;
    }
  }
`;

export const GroupMenus = styled.section`
  & + & {
    margin-top: 2rem;
  }
  .title {
    font-size: 1rem;
    font-weight: 500;
    color: #91a1b4;
    letter-spacing: 3px;
    padding: 0 2.2rem;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
  }
  .list-item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
