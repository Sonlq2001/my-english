import { styled } from "styled-components";

export const WrapButtonTheme = styled.div`
  padding: 0 2.2rem;
  .checkbox {
    opacity: 0;
    position: absolute;
  }

  .checkbox-label {
    background-color: #eee;
    width: 7rem;
    height: 3.2rem;
    border-radius: 5rem;
    position: relative;
    padding: 5px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* .fa-moon {
    color: #f1c40f;
  }

  .fa-sun {
    color: #f39c12;
  } */

  .checkbox-label .ball {
    background-color: #fff;
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    border-radius: 50%;
    transition: transform 0.2s linear;
  }

  .checkbox:checked + .checkbox-label .ball {
    transform: translateX(3.5rem);
  }
`;
