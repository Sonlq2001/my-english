import { styled } from "styled-components";

export const WrapSettingLayout = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.palette.white};
  padding: 2rem;
  .content-setting {
    padding-left: 2rem;
    width: 100%;
  }
`;

export const TitleSetting = styled.div`
  padding: 3rem 0;
  p {
    margin-top: 1rem;
    font-size: 1.5rem;
  }
`;

export const SidebarMenu = styled.nav`
  display: flex;
  flex-direction: column;
  min-width: 23rem;
  border-right: 1px solid #dfe7e9;
  padding-right: 2rem;
  a.active {
    button {
      background-color: ${(props) => props.theme.palette.button.lightBg};
    }
  }
  .nav-link {
    width: 100%;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    font-weight: 500;
  }
`;
