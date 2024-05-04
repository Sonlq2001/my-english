import { styled } from "styled-components";

export const OverlayModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
`;

export const WrapModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.palette.white};
  border-radius: 1.5rem;
  max-width: 60rem;
  width: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  .header-modal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 2.5rem;
    border-bottom: 1px solid ${(props) => props.theme.palette.gray.extraLight};
    h3 {
      font-size: 2.2rem;
    }
    .btn-closed {
      line-height: 0;
      padding: 0.3rem;
      border-radius: 100%;
      background-color: transparent;
      overflow: hidden;
      transition: 0.2s linear;
      &:hover {
        background-color: ${(props) => props.theme.palette.gray.extraLight};
      }
      svg {
        color: ${(props) => props.theme.palette.gray.medium};
      }
    }
  }
  .body-modal {
    padding: 2.5rem;
    border-bottom: 1px solid ${(props) => props.theme.palette.gray.extraLight};
  }
  .footer-modal {
    display: flex;
    justify-content: flex-end;
    padding: 2.5rem;
    gap: 2rem;
  }
`;
