import { FC } from "react";

import AppButton from "@app/components/AppButton/AppButton";

import { WrapContent, ListTopic, ListPodcast } from "./ListeningScreen.styles";
import { LIST_TOPIC } from "../../constants/listening.constants";
import ItemPodcast from "../../components/ItemPodcast/ItemPodcast";

const ListeningScreen: FC = () => {
  return (
    <WrapContent>
      <h2>Discover</h2>

      <ListTopic>
        {LIST_TOPIC.map((topic, index) => (
          <AppButton
            key={index}
            variant="text"
            className="btn-topic"
            size="medium"
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
