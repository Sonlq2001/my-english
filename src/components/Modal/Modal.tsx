import { FC, ReactNode } from "react";

import Portal from "@app/components/Portal/Portal";
import IconClose from "@app/assets/images/icon-svg/icon-close.svg?react";
import AppButton from "@app/components/AppButton/AppButton";

import { OverlayModal, WrapModal } from "./Modal.styles";

interface ModalProps {
  open: true;
  children: ReactNode;
  textOK?: string;
  onSubmit: () => void;
  onClosed: () => void;
  title: string;
  isSubButton?: boolean;
  textSub?: string;
  onCancel?: () => void;
  disabled?: boolean;
  disabledSub?: boolean;
}

const Modal: FC<ModalProps> = ({
  children,
  textOK = "Ok",
  onSubmit,
  onClosed,
  title,
  isSubButton,
  textSub = "Cancel",
  onCancel,
  disabled = false,
  disabledSub = false,
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
            {isSubButton && (
              <AppButton
                variant="text"
                size="large"
                onClick={onCancel}
                disabled={disabledSub}
              >
                {textSub}
              </AppButton>
            )}

            <AppButton size="large" onClick={onSubmit} disabled={disabled}>
              {textOK}
            </AppButton>
          </footer>
        </WrapModal>
      </OverlayModal>
    </Portal>
  );
};

export default Modal;
