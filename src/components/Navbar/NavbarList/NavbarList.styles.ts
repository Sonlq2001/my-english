import { styled } from "styled-components";

export const WrapNavbarList = styled.div`
  position: absolute;
  top: 6rem;
  right: 2rem;
  background-color: ${(props) => props.theme.palette.white};
  padding: 1rem 2rem;
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  min-width: 23rem;
  font-size: 1.4rem;

  .btn-logout {
    background-color: transparent;
    padding: 1rem 0;
    display: block;
    width: 100%;
    text-align: left;
    color: ${(props) => props.theme.palette.gray.semibold};
    &:hover {
      color: ${(props) => props.theme.palette.gray.black};
    }
  }
`;

export const NavbarListAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;
  border-bottom: 1px solid ${(props) => props.theme.palette.gray.extraLight};
  padding-bottom: 1.5rem;

  .nav-avatar {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.palette.gray.extraLight};
  }
  .full-name {
    font-weight: ${(props) => props.theme.palette.weight.medium};
    margin-bottom: 0.4rem;
    font-size: 1.6rem;
  }
  .slug-name {
    font-size: 1.3rem;
    color: ${(props) => props.theme.palette.gray.medium};
  }
`;

export const WrapList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  color: ${(props) => props.theme.palette.gray.semibold};
  border-bottom: 1px solid ${(props) => props.theme.palette.gray.extraLight};
  .link-nav {
    padding: 1rem 0;
    &:hover {
      color: ${(props) => props.theme.palette.gray.black};
    }
  }
`;
