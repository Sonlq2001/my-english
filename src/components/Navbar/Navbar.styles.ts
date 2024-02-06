import { styled } from "styled-components";

export const NavbarWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.5rem;
  padding: 0 2rem;
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
