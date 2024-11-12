import { FC } from "react";
import { useParams } from "react-router-dom";

import { decodeKeyword } from "@app/helpers/encode-decode-word";
import ContentContainer from "@app/components/ContentContainer/ContentContainer";
import PinCard from "@app/features/vocabulary/components/PinCard/PinCard";

import {
  LeftLayout,
  RightLayout,
  WrapContent,
  WrapListVocabulary,
  WrapPage,
} from "./ListVocabulary.styles";
import VocabularyItem from "../../components/VocabularyItem/VocabularyItem";
import {
  useGetListVocabularyByTopicQuery,
  useGetMarkVocabularyListQuery,
} from "../../vocabulary";

const ListVocabulary: FC = () => {
  const { topic } = useParams<{ topic: string }>();
  const { data, isLoading } = useGetListVocabularyByTopicQuery(
    decodeKeyword(topic || "")
  );

  const { data: markVocabularyList, isLoading: isLoadingMarkVocabularyList } =
    useGetMarkVocabularyListQuery(topic || "");

  return (
    <WrapPage>
      <LeftLayout>
        <ContentContainer title="Vocabulary topic">
          <WrapContent>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <>
                {data && data.length > 0 ? (
                  <WrapListVocabulary>
                    {data.length > 0 &&
                      data.map((item) => (
                        <VocabularyItem
                          key={item.id}
                          vocabulary={item}
                          topic={topic || ""}
                        />
                      ))}
                  </WrapListVocabulary>
                ) : (
                  <div>Empty</div>
                )}
              </>
            )}
          </WrapContent>
        </ContentContainer>
      </LeftLayout>

      <RightLayout>
        {isLoadingMarkVocabularyList ? (
          <div>Loading...</div>
        ) : (
          <>
            {markVocabularyList?.markVocabulary ? (
              markVocabularyList.markVocabulary.map((item) => (
                <PinCard key={item.id} vocabulary={item} topic={topic || ""} />
              ))
            ) : (
              <div>Empty</div>
            )}
          </>
        )}
      </RightLayout>
    </WrapPage>
  );
};

export default ListVocabulary;
