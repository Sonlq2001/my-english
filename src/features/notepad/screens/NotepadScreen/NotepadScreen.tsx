import { FC } from "react";

import AppButton from "@app/components/AppButton/AppButton";
import IconWriting from "@app/assets/images/icon-svg/icon-writing.svg?react";

import { useGetVocabularyQuery } from "../../redux/notepad.api";

import { WrapNotepad, ListNotepad } from "./NotepadScreen.styles";
import NotepadSection from "../../components/NotepadSection/NotepadSection";
import TitlePage from "@app/components/TitlePage/TitlePage";

const NotepadScreen: FC = () => {
  const { data } = useGetVocabularyQuery();
  // TODO: RTK query
  console.log(data);

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
