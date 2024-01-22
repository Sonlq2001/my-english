import { styled } from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0.8rem 1.6rem;
  width: 100%;
  justify-content: flex-end;
  background-color: transparent;
  border-radius: 2rem 0 0 2rem;
  transition: 0.3s ease;
  .icon {
    line-height: 0;
  }
  .left-icon {
    margin-right: 1rem;
  }
  .right-icon {
    margin-left: 1rem;
  }
  .text {
    font-size: 1.7rem;
    font-weight: 600;
  }
  &:hover {
    background-color: var(--info-bg-light);
  }
`;
