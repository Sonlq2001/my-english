// import { FC } from "react";

// import IconTopic from "@app/assets/images/icon-svg/icon-topic.svg?react";
// import TitlePage from "@app/components/TitlePage/TitlePage";
// import {
//   VocabularyPathsEnum,
//   useGetListTopicsQuery,
// } from "@app/features/vocabulary/vocabulary";
// import { encodeKeyword } from "@app/helpers/encode-decode-word";

// import {
//   WrapContent,
//   ListData,
//   ItemTopic,
// } from "./ListVocabularyTopics.styles";

// const ListVocabularyTopics: FC = () => {
//   const { data, isLoading, error } = useGetListTopicsQuery();

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error || !data) {
//     return <div>Error</div>;
//   }

//   return (
//     <>
//       <TitlePage title="List topics" subtitle="List of vocabulary topics" />

//       <WrapContent>
//         <h3>Topics</h3>
//         <ListData>
//           {data.length > 0 &&
//             data.map((topic) => (
//               <ItemTopic
//                 to={VocabularyPathsEnum.LIST_VOCABULARY.replace(
//                   ":topic",
//                   encodeKeyword(topic.name)
//                 )}
//                 key={topic.id}
//               >
//                 <IconTopic />
//                 {topic.name}
//               </ItemTopic>
//             ))}
//         </ListData>
//       </WrapContent>
//     </>
//   );
// };

// export default ListVocabularyTopics;

import { FC } from "react";

import ContentContainer from "@app/components/ContentContainer/ContentContainer";
import FlashcardTopic from "@app/features/vocabulary/components/FlashcardTopic/FlashcardTopic";
import { LIST_CARDS_TOPIC } from "@app/features/vocabulary/constants/vocabulary.constants";

import {
  InnerContentList,
  WrapContentListTopics,
} from "./ListVocabularyTopics.styles";

const ListVocabularyTopics: FC = () => {
  return (
    // TODO: Link
    <WrapContentListTopics>
      <ContentContainer title="List topic">
        <InnerContentList>
          {LIST_CARDS_TOPIC.map((topic, index) => (
            <FlashcardTopic key={`topic-${index}`} {...topic} />
          ))}
        </InnerContentList>
      </ContentContainer>
    </WrapContentListTopics>
  );
};

export default ListVocabularyTopics;
