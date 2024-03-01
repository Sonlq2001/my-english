import { styled } from "styled-components";

export const LayoutDefault = styled.div`
  display: flex;
  .btn-create-vocabulary {
    position: fixed;
    right: 4rem;
    bottom: 14rem;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    padding: 0;
    min-width: 0;
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const InnerContent = styled.div`
  padding: 0 3rem;
`;
