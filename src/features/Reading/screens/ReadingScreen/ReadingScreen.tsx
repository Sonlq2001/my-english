import { FC, ElementType, useState } from "react";

import {
  LIST_TOPICS,
  useGetListDocumentsQuery,
} from "@app/features/reading/reading";
import ItemTopic from "@app/features/reading/components/ItemTopic/ItemTopic";
import ContentContainer from "@app/components/ContentContainer/ContentContainer";
import ItemArticle from "@app/features/reading/components/ItemArticle/ItemArticle";
import ListMemoArticles from "@app/features/reading/components/ListMemoArticles/ListMemoArticles";
import Pagination from "@app/components/Pagination/Pagination";
import { QueryParamsUrl } from "@app/types/app.types";

import {
  WrapReadingScreen,
  ListTopics,
  SectionLayoutReading,
  SectionArticleList,
} from "./ReadingScreen.styles";

const ReadingScreen: FC = () => {
  const [queryParams, setQueryParams] = useState<QueryParamsUrl>({
    page: 1,
    perPage: 10,
    filter: "",
  });
  const { data: listDocuments, isLoading } = useGetListDocumentsQuery({
    ...queryParams,
    filter: queryParams.filter || undefined,
  });

  return (
    <WrapReadingScreen>
      <ContentContainer title="Topics">
        <ListTopics>
          {LIST_TOPICS.map((topic, index) => {
            const IconTopic = topic.thumbnail as ElementType;
            return (
              <ItemTopic
                key={`topic-${index}`}
                {...topic}
                thumbnail={<IconTopic />}
                queryParams={queryParams}
                setQueryParams={setQueryParams}
              />
            );
          })}
        </ListTopics>
      </ContentContainer>

      <SectionLayoutReading>
        <ContentContainer className="article-list" title="Article list">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              {listDocuments?.data && listDocuments.data.length > 0 ? (
                <SectionArticleList>
                  {listDocuments.data.map((item) => (
                    <ItemArticle
                      key={item.id}
                      document={{
                        title: item.title,
                        topic: item.topic,
                        createdAt: item.createdAt,
                        id: item.id,
                        shortDescription: item.shortDescription,
                        description: item.description,
                      }}
                    />
                  ))}

                  <Pagination
                    total={listDocuments.meta.total}
                    perPage={queryParams.perPage}
                    onChange={(page) =>
                      setQueryParams({ ...queryParams, page: Number(page) })
                    }
                    className="pagination"
                  />
                </SectionArticleList>
              ) : (
                <div>Empty</div>
              )}
            </>
          )}
        </ContentContainer>

        <ContentContainer className="memo-article" title="Memo article">
          <ListMemoArticles />
        </ContentContainer>
      </SectionLayoutReading>
    </WrapReadingScreen>
  );
};

export default ReadingScreen;
