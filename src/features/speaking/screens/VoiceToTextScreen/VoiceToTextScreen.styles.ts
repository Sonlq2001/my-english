import { styled } from "styled-components";

export const WrapContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const InnerContent = styled.div`
  flex: 1;
  .content-render {
    margin-top: 2rem;
    line-height: 2.5rem;
    border-top: 1px solid ${(props) => props.theme.palette.gray.extraLight};
  }
  .content-tab {
    margin-top: 3rem;
  }
`;

export const ListActionReading = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  .btn-action {
    transition: none;
  }
`;

export const BoxIconVoice = styled.div`
  height: 7rem;
  width: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.palette.primary.main};
  border-radius: 50%;
  color: ${(props) => props.theme.palette.white};
  cursor: pointer;
  position: relative;
  svg {
    width: 3rem;
    height: 3rem;
  }

  .pulsate {
    position: absolute;
    width: 8rem;
    height: 8rem;
    background: ${(props) => props.theme.palette.primary.main};
    border: 5px solid ${(props) => props.theme.palette.primary.main};
    border-radius: 50%;
    position: absolute;
    animation: pulsate infinite 1s;
  }

  @keyframes pulsate {
    0% {
      transform: scale(1, 1);
      opacity: 0.5;
    }
    100% {
      transform: scale(1.3, 1.3);
      opacity: 0;
    }
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;
