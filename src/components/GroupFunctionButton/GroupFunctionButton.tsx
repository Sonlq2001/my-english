import { ElementType, FC, useState } from "react";
import debounce from "lodash.debounce";

import IconGoogleTranslate from "@app/assets/images/icon-svg/icon-google-translate.svg?react";
import IconSpeaking2 from "@app/assets/images/icon-svg/icon-speaking-2.svg?react";
import IconTranscript from "@app/assets/images/icon-svg/icon-transcript.svg?react";
import { convertTextToSpeech } from "@app/helpers/text-to-speech";
import { KEYS_BUTTONS } from "@app/constants/app.constants";

import { WrapGroupButton } from "./GroupFunctionButton.styles";

const LIST_ACTIONS_BUTTONS = [
  {
    icon: IconGoogleTranslate,
    key: KEYS_BUTTONS.TRANSLATE,
  },
  {
    icon: IconSpeaking2,
    key: KEYS_BUTTONS.SPEAKING,
  },
  {
    icon: IconTranscript,
    key: KEYS_BUTTONS.TRANSCRIPT,
    event: true,
  },
];

const DELAY_CLICK = 300; // 300 milliseconds = 0.3s

interface GroupFunctionButtonProps {
  textSpeak: string;
  onClickTranscript?: () => void;
}

const GroupFunctionButton: FC<GroupFunctionButtonProps> = ({
  textSpeak,
  onClickTranscript,
}) => {
  const [activeButtons, setActiveButtons] = useState<KEYS_BUTTONS[]>([]);

  const handleSpeak = () => {
    if (!textSpeak.trim()) return;

    convertTextToSpeech(textSpeak);
  };

  const handleTranslate = () => {
    const api = `https://api.mymemory.translated.net/get?q=${textSpeak}!&langpair=${"en-GB"}|${"vi-VN"}`;
    // TODO: translate
    fetch(api)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  const handelTranscript = () => {
    if (onClickTranscript) {
      onClickTranscript();
    } else {
      console.error("onClickTranscript not found");
    }
  };

  const handleActionButton = debounce((key: string) => {
    switch (key) {
      case KEYS_BUTTONS.TRANSLATE:
        handleTranslate();
        break;
      case KEYS_BUTTONS.SPEAKING:
        handleSpeak();
        break;
      default:
        handelTranscript();
        break;
    }
  }, DELAY_CLICK);

  return (
    <WrapGroupButton>
      {LIST_ACTIONS_BUTTONS.map((btnAction, index) => {
        const IconMenu = btnAction.icon as ElementType;
        return (
          ((btnAction?.event && onClickTranscript) || !btnAction?.event) && (
            <IconMenu
              key={`btn-action-${index}`}
              className={
                activeButtons.includes(btnAction.key) ? "active-btn" : ""
              }
              onClick={() => {
                handleActionButton(btnAction.key);
                setActiveButtons((dataPrev) => {
                  if (!dataPrev.includes(btnAction.key)) {
                    return [...dataPrev, btnAction.key];
                  }
                  return dataPrev.filter((item) => item !== btnAction.key);
                });
              }}
            />
          )
        );
      })}
    </WrapGroupButton>
  );
};

export default GroupFunctionButton;
