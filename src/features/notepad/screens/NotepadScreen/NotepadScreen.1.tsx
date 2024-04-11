import { FC } from "react";
import AppButton from "@app/components/AppButton/AppButton";
import IconWriting from "@app/assets/images/icon-svg/icon-writing.svg?react";
import { useGetVocabularyQuery } from "../../redux/notepad.api";
import { WrapNotepad, ListNotepad } from "./NotepadScreen.styles";
import NotepadSection from "../../components/NotepadSection/NotepadSection";

export const NotepadScreen: FC = () => {
  useGetVocabularyQuery();
  // console.log(data);
  return (
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
  );
};
