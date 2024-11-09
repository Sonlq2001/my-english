import { FC } from "react";

import ContentContainer from "@app/components/ContentContainer/ContentContainer";
import FlashcardTopic from "@app/features/vocabulary/components/FlashcardTopic/FlashcardTopic";
import { useGetListTopicsQuery } from "@app/features/vocabulary/vocabulary";

import {
  InnerContentList,
  WrapContentListTopics,
} from "./ListVocabularyTopics.styles";

const ListVocabularyTopics: FC = () => {
  const { data, isLoading } = useGetListTopicsQuery();

  return (
    <WrapContentListTopics>
      <ContentContainer title="List topic">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <InnerContentList>
            {data &&
              data.length > 0 &&
              data.map((topic) => <FlashcardTopic key={topic.id} {...topic} />)}
          </InnerContentList>
        )}
      </ContentContainer>
    </WrapContentListTopics>
  );
};

export default ListVocabularyTopics;
