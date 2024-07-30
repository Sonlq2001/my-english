import { FC, ElementType } from "react";

import ContentContainer from "@app/components/ContentContainer/ContentContainer";

import { ListItemWriting, ListWritingStyle } from "./WritingScreen.styles";
import ItemTypeWriting from "../../components/ItemTypeWriting/ItemTypeWriting";
import { LIST_WRITING_STYLE } from "../../constants/writing.constants";

const WritingScreen: FC = () => {
  return (
    <ListWritingStyle>
      <ContentContainer title="Popular">
        <ListItemWriting>
          {LIST_WRITING_STYLE.map((item, index) => {
            const Icon = item.icon as ElementType;
            return <ItemTypeWriting key={index} {...item} icon={<Icon />} />;
          })}
        </ListItemWriting>
      </ContentContainer>
    </ListWritingStyle>
  );
};

export default WritingScreen;
