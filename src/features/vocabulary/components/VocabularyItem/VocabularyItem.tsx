import { FC } from "react";

import { Vocabulary } from "./VocabularyItem.styles";

const VocabularyItem: FC = () => {
  return (
    <Vocabulary to="/vocabulary/hello">
      <img
        src="https://cdn.pixabay.com/photo/2024/01/04/21/54/volcano-8488486_1280.jpg"
        alt=""
      />
      <div className="vocabulary-info">
        <h4>Hello</h4>
        <p>(Noun)</p>
      </div>

      <div className="vocabulary-mean">Quốc gia</div>
    </Vocabulary>
  );
};

export default VocabularyItem;
