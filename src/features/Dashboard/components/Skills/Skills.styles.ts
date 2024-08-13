import { styled } from "styled-components";

export const WrapSkills = styled.section`
  padding: 3rem;
`;

export const ListSkills = styled.section`
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
  .skill {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: ${(props) => props.theme.palette.white};
    padding: 4px;
    border-radius: 3rem;
    font-weight: 500;
    .icon-skill {
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fbfbfc;
      border-radius: 50%;
    }
  }
`;
