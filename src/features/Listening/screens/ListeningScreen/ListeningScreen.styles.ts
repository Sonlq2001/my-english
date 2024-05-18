import { styled } from "styled-components";

export const WrapContent = styled.div`
  background-color: ${(props) => props.theme.palette.white};
  padding: 2rem;
  > h3 {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #dfe7e9;
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
