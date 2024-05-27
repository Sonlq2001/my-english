import { FC } from "react";

import ReturnButton from "@app/components/ReturnButton/ReturnButton";
import TitlePage from "@app/components/TitlePage/TitlePage";

import { WrapNotepadDetail, ContentDetail } from "./NotepadDetail.styles";
import { NotepadPathsEnum } from "../../constants/notepad.paths";

const NotepadDetail: FC = () => {
  return (
    <>
      <TitlePage title="Notebook content" subtitle="Review knowledge." />

      <WrapNotepadDetail>
        <ReturnButton to={NotepadPathsEnum.NOTEPAD} />
        <ContentDetail>
          <div className="time-notepad">28/02/2023</div>
          <h3>Stunning royalty-free images & royalty-free stock</h3>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            nesciunt excepturi reiciendis atque explicabo harum itaque quae,
            dolorem, at commodi, inventore dolorum deserunt voluptas assumenda
            blanditiis. Quas velit iure porro.
          </div>
        </ContentDetail>
      </WrapNotepadDetail>
    </>
  );
};

export default NotepadDetail;
