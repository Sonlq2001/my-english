import { FC } from "react";

import IconSpeaking2 from "@app/assets/images/icon-svg/icon-speaking-2.svg?react";
import IconClose from "@app/assets/images/icon-svg/icon-close.svg?react";

import { WrapModalTranslate, BodyModal } from "./ModalTranslate.styles";
import AppButton from "../AppButton/AppButton";

interface ModalTranslateProps {
  x: number;
  y: number;
  onCloseModal: () => void;
}

const ModalTranslate: FC<ModalTranslateProps> = ({ x, y, onCloseModal }) => {
  return (
    <WrapModalTranslate
      style={{
        position: "absolute",
        top: `${y}px`,
        left: `${x}px`,
      }}
    >
      <div className="header-modal">
        <AppButton
          className="btn-close"
          size="small"
          leftIcon={<IconClose />}
          onClick={onCloseModal}
        />
        <AppButton size="small">Save</AppButton>
      </div>
      <BodyModal>
        <div className="vocabulary">
          <div className="key-vocabulary">
            Information
            <IconSpeaking2 />
          </div>
          <div className="type-vocabulary">( Verb )</div>
        </div>

        <ol className="meanings">
          <li>sự thông tin</li>
          <li>thông tin</li>
        </ol>
      </BodyModal>
    </WrapModalTranslate>
  );
};

export default ModalTranslate;
