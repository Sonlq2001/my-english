import { FC } from "react";

import AppButton from "@app/components/AppButton/AppButton";
import IconGoogleTranslate from "@app/assets/images/icon-svg/icon-google-translate.svg?react";
import IconSpeaking2 from "@app/assets/images/icon-svg/icon-speaking-2.svg?react";
import ReturnButton from "@app/components/ReturnButton/ReturnButton";
import { convertTextToSpeech } from "@app/helpers/text-to-speech";

import {
  WrapWritingModel,
  ListAction,
  WrapTextarea,
  ExampleWriting,
} from "./WritingModelScreen.styles";

const WritingModelScreen: FC = () => {
  return (
    <WrapWritingModel>
      <ReturnButton to="/" />

      <h3>Example</h3>

      <ListAction>
        <AppButton variant="outlined" size="small">
          Random
        </AppButton>

        <AppButton variant="outlined" size="small">
          Next example
        </AppButton>
      </ListAction>
      <ExampleWriting>
        <div className="list-action-example">
          <IconGoogleTranslate />
          <IconSpeaking2
            onClick={() =>
              convertTextToSpeech(`Life is like riding a bicycle. To keep your balance, you must keep
          moving.`)
            }
          />
        </div>
        <p className="example-paragraph">
          Life is like riding a bicycle. To keep your balance, you must keep
          moving.
        </p>
      </ExampleWriting>

      <WrapTextarea>
        <textarea name="" rows={10} placeholder="Writing example..."></textarea>
      </WrapTextarea>
    </WrapWritingModel>
  );
};

export default WritingModelScreen;
