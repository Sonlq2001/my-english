import { FC } from "react";

import AppButton from "@app/components/AppButton/AppButton";
import IconWriting from "@app/assets/images/icon-svg/icon-writing.svg?react";
import TitlePage from "@app/components/TitlePage/TitlePage";

import { WrapNotepad, ListNotepad } from "./NotepadScreen.styles";
import NotepadSection from "../../components/NotepadSection/NotepadSection";

const NotepadScreen: FC = () => {
  return (
    <>
      <TitlePage
        title="Personal notebook"
        subtitle="Record useful information."
      />
      <WrapNotepad>
        <div className="row-header">
          <AppButton
            className="btn-add"
            to="/create-notepad"
            leftIcon={<IconWriting />}
          />
        </div>

        <ListNotepad>
          <NotepadSection />
          <NotepadSection />
          <NotepadSection />
          <NotepadSection />
        </ListNotepad>
      </WrapNotepad>
    </>
  );
};

export default NotepadScreen;
