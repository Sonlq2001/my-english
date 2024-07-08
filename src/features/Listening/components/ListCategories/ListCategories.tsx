import { FC } from "react";

import { HeaderBox, WrapListCategories } from "./ListCategories.styles";

const ListCategories: FC = () => {
  return (
    <WrapListCategories>
      <HeaderBox>
        <h2>Categories</h2>

        <div>
          <button>left</button>
          <button>right</button>
        </div>
      </HeaderBox>
    </WrapListCategories>
  );
};

export default ListCategories;
