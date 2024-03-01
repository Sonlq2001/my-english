import { FC } from "react";

import IconTopic from "@app/assets/images/icon-svg/icon-topic.svg?react";

import {
  WrapContent,
  ListData,
  ItemTopic,
} from "./ListVocabularyTopics.styles";

const ListVocabularyTopics: FC = () => {
  return (
    <WrapContent>
      <h3>Topics</h3>
      <ListData>
        <ItemTopic to="/list-vocabulary/school">
          <IconTopic />
          School
        </ItemTopic>
      </ListData>
    </WrapContent>
  );
};

export default ListVocabularyTopics;
