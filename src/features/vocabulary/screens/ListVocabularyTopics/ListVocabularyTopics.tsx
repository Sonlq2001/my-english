import { FC } from "react";

import IconTopic from "@app/assets/images/icon-svg/icon-topic.svg?react";
import TitlePage from "@app/components/TitlePage/TitlePage";
import {
  VocabularyPathsEnum,
  useGetListTopicsQuery,
} from "@app/features/vocabulary/vocabulary";
import { encodeKeyword } from "@app/helpers/encode-decode-word";

import {
  WrapContent,
  ListData,
  ItemTopic,
} from "./ListVocabularyTopics.styles";

const ListVocabularyTopics: FC = () => {
  const { data, isLoading, error } = useGetListTopicsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error</div>;
  }

  return (
    <>
      <TitlePage title="List topics" subtitle="List of vocabulary topics" />

      <WrapContent>
        <h3>Topics</h3>
        <ListData>
          {data.length > 0 &&
            data.map((topic) => (
              <ItemTopic
                to={VocabularyPathsEnum.LIST_VOCABULARY.replace(
                  ":topic",
                  encodeKeyword(topic.name)
                )}
                key={topic.id}
              >
                <IconTopic />
                {topic.name}
              </ItemTopic>
            ))}
        </ListData>
      </WrapContent>
    </>
  );
};

export default ListVocabularyTopics;
