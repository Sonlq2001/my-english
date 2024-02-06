import { styled } from "styled-components";

export const WrapContent = styled.div`
  margin-top: 2rem;
  h2 {
    margin-bottom: 2rem;
  }
`;

export const ListTopic = styled.div`
  display: flex;
  align-items: center;
  .btn-topic {
    border-bottom: 2px solid ${(props) => props.theme.palette.primary.main};
    border-radius: 0;
  }
`;

export const ListPodcast = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 2rem;
`;
