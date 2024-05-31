import { FC } from "react";

import {
  NotepadPathsEnum,
  ResNotepadItem,
} from "@app/features/notepad/notepad";
import { formatDate } from "@app/helpers/time";

import { WrapNotepadSection } from "./NotepadSection.styles";
interface NotepadSectionProps {
  notepad: ResNotepadItem;
}

const NotepadSection: FC<NotepadSectionProps> = ({ notepad }) => {
  return (
    <WrapNotepadSection
      to={NotepadPathsEnum.NOTEPAD_DETAIL.replace(":notepad_id", notepad.id)}
    >
      <h3>{notepad.title}</h3>
      <div className="info-notepad">
        <span>{formatDate(notepad.createdAt)}</span>
        <p
          className="des-notepad"
          dangerouslySetInnerHTML={{ __html: notepad.description }}
        />
      </div>
    </WrapNotepadSection>
  );
};

export default NotepadSection;
