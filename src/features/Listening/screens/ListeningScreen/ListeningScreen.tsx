import { FC, useEffect, useState } from "react";
import clsx from "clsx";
import { unwrapResult } from "@reduxjs/toolkit";

import AppButton from "@app/components/AppButton/AppButton";
import TitlePage from "@app/components/TitlePage/TitlePage";

import { ListTopic, ListPodcast, WrapContent } from "./ListeningScreen.styles";
import { LIST_TOPIC } from "../../constants/listening.constants";
import { useAppDispatch, useAppSelector } from "@app/redux/store";
import { getListPodcasts } from "@app/features/listening/redux/listening.slice";
import ItemPodcast from "../../components/ItemPodcast/ItemPodcast";

const ListeningScreen: FC = () => {
  const dispatch = useAppDispatch();
  const [tabTopic, setTabTopic] = useState<string>("Popular"); // TODO: default topic
  const [isLoadingListPodcasts, setIsLoadingListPodcasts] =
    useState<boolean>(true);
  const listPodcasts = useAppSelector(
    (state) => state.listening.podcastData.list
  );

  const handleTabTopic = (nameTopic: string) => {
    setTabTopic(nameTopic);
  };

  useEffect(() => {
    dispatch(getListPodcasts())
      .then(unwrapResult)
      .finally(() => setIsLoadingListPodcasts(false));
  }, [dispatch]);

  return (
    <>
      <TitlePage
        title="Listening podcast"
        subtitle="Practice listening every day"
      />

      <WrapContent>
        <h3>Discovery</h3>
        <ListTopic>
          {LIST_TOPIC.map((topic, index) => (
            <AppButton
              key={index}
              variant="text"
              className={clsx("btn-topic", tabTopic === topic.name && "active")}
              size="medium"
              onClick={() => handleTabTopic(topic.name)}
            >
              {topic.name}
            </AppButton>
          ))}
        </ListTopic>

        {isLoadingListPodcasts ? (
          <div>Loading...</div>
        ) : (
          <>
            {listPodcasts && listPodcasts?.length > 0 && (
              <ListPodcast>
                {listPodcasts.map((podcast) => (
                  <ItemPodcast
                    id={podcast.id}
                    title={podcast.title}
                    topic={podcast.topic}
                    key={podcast.id}
                    thumbnail={podcast.thumbnail?.imageUrl}
                  />
                ))}
              </ListPodcast>
            )}
          </>
        )}
      </WrapContent>
    </>
  );
};

export default ListeningScreen;
