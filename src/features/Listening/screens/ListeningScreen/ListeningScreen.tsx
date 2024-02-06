import { FC, useState } from "react";
import clsx from "clsx";

import AppButton from "@app/components/AppButton/AppButton";

import { WrapContent, ListTopic, ListPodcast } from "./ListeningScreen.styles";
import { LIST_TOPIC } from "../../constants/listening.constants";
import ItemPodcast from "../../components/ItemPodcast/ItemPodcast";

const ListeningScreen: FC = () => {
  const [tabTopic, setTabTopic] = useState<string>("Popular"); // TODO: default topic

  const handleTabTopic = (nameTopic: string) => {
    setTabTopic(nameTopic);
  };

  return (
    <WrapContent>
      <h2>Discover</h2>

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

      <ListPodcast>
        <ItemPodcast />
        <ItemPodcast />
        <ItemPodcast />
      </ListPodcast>
    </WrapContent>
  );
};

export default ListeningScreen;
