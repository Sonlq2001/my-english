import { FC, useState } from "react";

import GroupFunctionButton from "@app/components/GroupFunctionButton/GroupFunctionButton";

import { WrapCustomizeText } from "./CustomizeText.styles";

const CustomizeText: FC = () => {
  const [customContent, setCustomContent] = useState<string>("");

  return (
    <WrapCustomizeText>
      <GroupFunctionButton textSpeak={customContent} />

      <textarea
        name=""
        id=""
        rows={5}
        placeholder="Paste content text content"
        onChange={(e) => setCustomContent(e.target.value)}
        value={customContent}
      />
    </WrapCustomizeText>
  );
};

export default CustomizeText;
