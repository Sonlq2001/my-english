import { FC, ReactNode } from "react";

import Navbar from "@app/components/Navbar/Navbar";
import Sidebar from "@app/components/Sidebar/Sidebar";
import AppButton from "@app/components/AppButton/AppButton";
import { VocabularyPathsEnum } from "@app/features/vocabulary/vocabulary";
import IconPlus from "@app/assets/images/icon-svg/icon-plus.svg?react";

import { LayoutDefault, Content, InnerContent } from "../Layout.styles";

interface CreateVocabularyLayoutProps {
  children?: ReactNode;
}

const CreateVocabularyLayout: FC<CreateVocabularyLayoutProps> = ({
  children,
}) => {
  return (
    <div id="create-vocabulary-layout">
      <LayoutDefault>
        <Sidebar />
        <Content>
          <Navbar />
          <InnerContent>{children}</InnerContent>
        </Content>

        <AppButton
          to={VocabularyPathsEnum.CREATE_VOCABULARY}
          className="btn-create-vocabulary"
          leftIcon={<IconPlus />}
        />
      </LayoutDefault>
    </div>
  );
};

export default CreateVocabularyLayout;
