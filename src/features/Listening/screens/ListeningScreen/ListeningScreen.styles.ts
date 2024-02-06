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
    border-radius: 0;
    transition: none;
  }
  .btn-topic.active {
    border-bottom: 2px solid ${(props) => props.theme.palette.primary.main};
  }
`;

export const ListPodcast = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 2rem;
`;
