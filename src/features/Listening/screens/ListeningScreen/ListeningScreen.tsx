// import { FC, useEffect, useState } from "react";
// import clsx from "clsx";
// import { unwrapResult } from "@reduxjs/toolkit";

// import AppButton from "@app/components/AppButton/AppButton";
// import TitlePage from "@app/components/TitlePage/TitlePage";

// import { ListTopic, ListPodcast, WrapContent } from "./ListeningScreen.styles";
// import { LIST_TOPIC } from "../../constants/listening.constants";
// import { useAppDispatch, useAppSelector } from "@app/redux/store";
// import { getListPodcasts } from "@app/features/listening/redux/listening.slice";
// import ItemPodcast from "../../components/ItemPodcast/ItemPodcast";

// const ListeningScreen: FC = () => {
//   const dispatch = useAppDispatch();
//   const [tabTopic, setTabTopic] = useState<string>("Popular"); // TODO: default topic
//   const [isLoadingListPodcasts, setIsLoadingListPodcasts] =
//     useState<boolean>(true);
//   const listPodcasts = useAppSelector(
//     (state) => state.listening.podcastData.list
//   );

//   const handleTabTopic = (nameTopic: string) => {
//     setTabTopic(nameTopic);
//   };

//   useEffect(() => {
//     dispatch(getListPodcasts())
//       .then(unwrapResult)
//       .finally(() => setIsLoadingListPodcasts(false));
//   }, [dispatch]);

//   return (
//     <>
//       <TitlePage
//         title="Listening podcast"
//         subtitle="Practice listening every day"
//       />

//       <WrapContent>
//         <h3>Discovery</h3>
//         <ListTopic>
//           {LIST_TOPIC.map((topic, index) => (
//             <AppButton
//               key={index}
//               variant="text"
//               className={clsx("btn-topic", tabTopic === topic.name && "active")}
//               size="medium"
//               onClick={() => handleTabTopic(topic.name)}
//             >
//               {topic.name}
//             </AppButton>
//           ))}
//         </ListTopic>

//         {isLoadingListPodcasts ? (
//           <div>Loading...</div>
//         ) : (
//           <>
//             {listPodcasts && listPodcasts?.length > 0 && (
//               <ListPodcast>
//                 {listPodcasts.map((podcast) => (
//                   <ItemPodcast
//                     id={podcast.id}
//                     title={podcast.title}
//                     topic={podcast.topic}
//                     key={podcast.id}
//                     thumbnail={podcast.thumbnail?.imageUrl}
//                   />
//                 ))}
//               </ListPodcast>
//             )}
//           </>
//         )}
//       </WrapContent>
//     </>
//   );
// };

// export default ListeningScreen;
import { FC } from "react";

import ImagePodcast from "@app/assets/images/headphone-amico.png";
import IconMedal from "@app/assets/images/icon-svg/icon-medal.svg?react";
import IconFire from "@app/assets/images/icon-svg/icon-fire.svg?react";
import IconLeaf from "@app/assets/images/icon-svg/icon-four-leaf-clover.svg?react";
import TopicList from "@app/features/listening/components/TopicList/TopicList";
import PodcastList from "@app/features/listening/components/PodcastList/PodcastList";
import LazyImage from "@app/components/LazyImage/LazyImage";

import {
  BannerListening,
  BoxUser,
  WrapListening,
} from "./ListeningScreen.styles";

const ListeningScreen: FC = () => {
  return (
    <WrapListening>
      <BannerListening>
        <article className="box-image">
          <div className="content-banner">
            <h1>Mind the music</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur saepe nihil repellat doloribus numquam reiciendis
            </p>
          </div>
          <LazyImage src={ImagePodcast} alt="" />
        </article>

        <BoxUser>
          <LazyImage
            src="https://cdn.pixabay.com/photo/2022/10/17/15/02/photography-7527978_640.jpg"
            alt=""
          />
          <div className="user-info">
            <h3 className="user-name">Le Quang Son</h3>
            <span className="total-podcast">50 podcast</span>

            <div className="list-icon">
              <IconFire />
              <IconMedal />
              <IconLeaf />
            </div>
          </div>
        </BoxUser>
      </BannerListening>

      <TopicList />

      <PodcastList />
    </WrapListening>
  );
};

export default ListeningScreen;
