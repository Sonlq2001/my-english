import { FC } from "react";

import TextField from "@app/components/TextField/TextField";

import { WrapTabInsertLink } from "./TabInsertLink.styles";

const TabInsertLink: FC = () => {
  return (
    <WrapTabInsertLink>
      <TextField
        name="image"
        label="Image URL"
        fullWidth
        placeholder="Paste or type URL"
        isRequire
      />

      <TextField name="alt" label="Alt text (alternative text)" fullWidth />
    </WrapTabInsertLink>
  );
};

export default TabInsertLink;
