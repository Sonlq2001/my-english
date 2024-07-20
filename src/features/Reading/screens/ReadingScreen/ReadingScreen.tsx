// import { FC, useEffect, useState } from "react";
// import { unwrapResult } from "@reduxjs/toolkit";

// import TitlePage from "@app/components/TitlePage/TitlePage";
// import AppButton from "@app/components/AppButton/AppButton";
// import { ReadingPathsEnum } from "@app/features/reading/reading";
// import { useAppDispatch, useAppSelector } from "@app/redux/store";
// import { getDocumentList } from "@app/features/reading/redux/reading.slice";

// import Article from "../../components/Article/Article";
// import {
//   WrapContentReading,
//   LayoutReading,
//   ColumnLeft,
//   ColumnRight,
//   ListArticle,
// } from "./ReadingScreen.styles";

// const ReadingScreen: FC = () => {
//   const dispatch = useAppDispatch();
//   const documentList = useAppSelector(
//     (state) => state.reading.documentData.list
//   );
//   const [isLoadingDocumentList, setIsLoadingDocumentList] =
//     useState<boolean>(true);

//   useEffect(() => {
//     dispatch(getDocumentList())
//       .then(unwrapResult)
//       .finally(() => setIsLoadingDocumentList(false));
//   }, [dispatch]);

//   return (
//     <>
//       <TitlePage
//         title="Read the document"
//         subtitle="Repository for all your documents."
//       />

//       <WrapContentReading>
//         {isLoadingDocumentList ? (
//           <div>Loading...</div>
//         ) : (
//           <LayoutReading>
//             <ColumnLeft>
//               <h3>All documents</h3>

//               <ListArticle>
//                 {documentList &&
//                   documentList.length > 0 &&
//                   documentList.map((doc) => (
//                     <Article article={doc} key={doc.id} />
//                   ))}
//               </ListArticle>
//             </ColumnLeft>

//             <ColumnRight>
//               <AppButton fullWidth to={ReadingPathsEnum.CREATE_DOCUMENT}>
//                 Create
//               </AppButton>
//             </ColumnRight>
//           </LayoutReading>
//         )}
//       </WrapContentReading>
//     </>
//   );
// };

// export default ReadingScreen;

import { FC, ElementType } from "react";

import { LIST_TOPICS } from "@app/features/reading/reading";
import ItemTopic from "@app/features/reading/components/ItemTopic/ItemTopic";
import ContentContainer from "@app/components/ContentContainer/ContentContainer";
import ItemArticle from "@app/features/reading/components/ItemArticle/ItemArticle";

import {
  WrapReadingScreen,
  ListTopics,
  SectionLayoutReading,
  SectionArticleList,
} from "./ReadingScreen.styles";

const ReadingScreen: FC = () => {
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
              />
            );
          })}
        </ListTopics>
      </ContentContainer>

      <SectionLayoutReading>
        <ContentContainer className="article-list" title="Article list">
          <SectionArticleList>
            <ItemArticle />
            <ItemArticle />
            <ItemArticle />
            <ItemArticle />
            <ItemArticle />
          </SectionArticleList>
        </ContentContainer>

        <ContentContainer className="memo-article" title="Memo article">
          <div></div>
        </ContentContainer>
      </SectionLayoutReading>
    </WrapReadingScreen>
  );
};

export default ReadingScreen;
