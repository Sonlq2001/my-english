import { FC } from "react";

import AppButton from "@app/components/AppButton/AppButton";
import IconGoogleTranslate from "@app/assets/images/icon-svg/icon-google-translate.svg?react";
import IconSpeaking2 from "@app/assets/images/icon-svg/icon-speaking-2.svg?react";
import ReturnButton from "@app/components/ReturnButton/ReturnButton";
import { convertTextToSpeech } from "@app/helpers/text-to-speech";
import TitlePage from "@app/components/TitlePage/TitlePage";
import { WritingPathsEnum } from "@app/features/writing/writing";
import { useGetListExampleRandomQuery } from "@app/features/writing/redux/writing.query";

import {
  WrapWritingModel,
  ListAction,
  WrapTextarea,
  ExampleWriting,
} from "./WritingModelScreen.styles";

const WritingModelScreen: FC = () => {
  const { data, isLoading, error, refetch } = useGetListExampleRandomQuery();

  const handleNextExample = () => {
    refetch();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error</div>;
  }

  return (
    <main>
      <TitlePage
        title="Practice writing with short examples"
        subtitle="Write from the simplest things."
      />

      <WrapWritingModel>
        <ReturnButton to={WritingPathsEnum.WRITING} />

        <h3>Example</h3>

        <ListAction>
          <AppButton
            variant="outlined"
            size="small"
            onClick={handleNextExample}
          >
            Next example
          </AppButton>
        </ListAction>
        <ExampleWriting>
          <div className="list-action-example">
            <IconGoogleTranslate />
            <IconSpeaking2 onClick={() => convertTextToSpeech(data.example)} />
          </div>
          <p className="example-paragraph">{data.example}</p>
        </ExampleWriting>

        <WrapTextarea>
          <textarea
            name=""
            rows={10}
            placeholder="Writing example..."
          ></textarea>
        </WrapTextarea>
      </WrapWritingModel>
    </main>
  );
};

export default WritingModelScreen;
