import { styled } from "styled-components";

export const NavbarWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5.4rem;
  padding: 0 2rem;

  .btn-login {
    font-weight: ${(props) => props.theme.palette.weight.medium};
    &:hover {
      text-decoration: underline;
      color: ${(props) => props.theme.palette.primary.main};
    }
  }
`;

export const BoxWeather = styled.div`
  display: flex;
  align-items: center;

  .text,
  .temperature {
    margin-right: 1rem;
  }

  .text {
    font-weight: ${(props) => props.theme.palette.weight.bold};
  }
`;
