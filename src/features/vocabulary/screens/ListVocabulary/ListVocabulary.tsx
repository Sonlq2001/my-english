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
import { useGetListVocabularyByTopicQuery } from "../../vocabulary";

const ListVocabulary: FC = () => {
  const { topic } = useParams<{ topic: string }>();
  const { data, error, isLoading } = useGetListVocabularyByTopicQuery(
    decodeKeyword(topic || "")
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error</div>;
  }

  return (
    <WrapPage>
      <LeftLayout>
        <ContentContainer title="Vocabulary topic">
          <WrapContent>
            <WrapListVocabulary>
              {data.length > 0 &&
                data.map((item) => (
                  <VocabularyItem key={item.id} vocabulary={item} />
                ))}
            </WrapListVocabulary>
          </WrapContent>
        </ContentContainer>
      </LeftLayout>

      <RightLayout>
        <PinCard />
        <PinCard />
        <PinCard />
        <PinCard />
        <PinCard />
      </RightLayout>
    </WrapPage>
  );
};

export default ListVocabulary;
