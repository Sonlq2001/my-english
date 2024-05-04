import { FC, ReactNode } from "react";

import Portal from "@app/components/Portal/Portal";
import IconClose from "@app/assets/images/icon-svg/icon-close.svg?react";
import AppButton from "@app/components/AppButton/AppButton";

import { OverlayModal, WrapModal } from "./Modal.styles";

interface ModalProps {
  open: true;
  children: ReactNode;
  textOK: string;
  onSubmit: () => void;
  onClosed: () => void;
  title: string;
}

const Modal: FC<ModalProps> = ({
  children,
  textOK = "Ok",
  onSubmit,
  onClosed,
  title,
}) => {
  return (
    <Portal open>
      <OverlayModal>
        <WrapModal>
          <header className="header-modal">
            <h3>{title}</h3>

            <button className="btn-closed" onClick={onClosed}>
              <IconClose />
            </button>
          </header>

          <main className="body-modal">{children}</main>

          <footer className="footer-modal">
            <AppButton size="large" onClick={onSubmit}>
              {textOK}
            </AppButton>
          </footer>
        </WrapModal>
      </OverlayModal>
    </Portal>
  );
};

export default Modal;
