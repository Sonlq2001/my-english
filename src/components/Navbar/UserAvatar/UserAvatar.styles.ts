import { styled } from "styled-components";

export const WrapUserAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .full-name {
    font-weight: ${(props) => props.theme.palette.weight.medium};
  }
  .user-avatar {
    border-radius: 50%;
    width: 4.5rem;
    height: 4.5rem;
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.palette.gray.extraLight};
  }
`;
