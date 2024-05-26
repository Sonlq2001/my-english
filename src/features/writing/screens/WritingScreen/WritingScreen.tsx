import { FC } from "react";
import TitlePage from "@app/components/TitlePage/TitlePage";

import WritingStyle from "../../components/WritingStyle/WritingStyle";
import { ListWritingStyle } from "./WritingScreen.styles";
import { LIST_WRITING_STYLE } from "../../constants/writing.constants";

const WritingScreen: FC = () => {
  return (
    <>
      <TitlePage title="Practice writing in different forms" subtitle="" />

      <ListWritingStyle>
        {LIST_WRITING_STYLE.map((item, index) => (
          <WritingStyle
            key={`writing-style-${index}`}
            title={item.title}
            image={item.thumbnail}
            path={item.path}
          />
        ))}
      </ListWritingStyle>
    </>
  );
};

export default WritingScreen;
