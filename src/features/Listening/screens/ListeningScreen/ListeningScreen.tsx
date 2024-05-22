import { FC, useState } from "react";
import clsx from "clsx";

import AppButton from "@app/components/AppButton/AppButton";
import TitlePage from "@app/components/TitlePage/TitlePage";
import { useGetListPodcastQuery } from "@app/features/listening/listening";

import { ListTopic, ListPodcast, WrapContent } from "./ListeningScreen.styles";
import { LIST_TOPIC } from "../../constants/listening.constants";
import ItemPodcast from "../../components/ItemPodcast/ItemPodcast";

const ListeningScreen: FC = () => {
  const [tabTopic, setTabTopic] = useState<string>("Popular"); // TODO: default topic
  const { data, isLoading, error } = useGetListPodcastQuery();

  const handleTabTopic = (nameTopic: string) => {
    setTabTopic(nameTopic);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error</div>;
  }

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

        {data.length > 0 && (
          <ListPodcast>
            {data.map((podcast) => (
              <ItemPodcast
                id={podcast.id}
                title={podcast.title}
                topic={podcast.topic.name}
                key={podcast.id}
              />
            ))}
          </ListPodcast>
        )}
      </WrapContent>
    </>
  );
};

export default ListeningScreen;
