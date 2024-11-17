import { FC } from "react";
import { useParams } from "react-router-dom";

import ReturnButton from "@app/components/ReturnButton/ReturnButton";
import TitlePage from "@app/components/TitlePage/TitlePage";
import { useGetNotepadDetailQuery } from "@app/features/notepad/notepad";
import { formatDate } from "@app/helpers/time";

import { WrapNotepadDetail, ContentDetail } from "./NotepadDetail.styles";
import { NotepadPathsEnum } from "../../constants/notepad.paths";

const NotepadDetail: FC = () => {
  const { notepad_id } = useParams<{ notepad_id: string }>();
  const { data, isLoading } = useGetNotepadDetailQuery(notepad_id || "");

  return (
    <main>
      <TitlePage title="Notebook content" subtitle="Review knowledge." />

      <WrapNotepadDetail>
        <ReturnButton to={NotepadPathsEnum.NOTEPAD} />

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {data && (
              <ContentDetail>
                <div className="time-notepad">{formatDate(data.createdAt)}</div>
                <h3>{data.title}</h3>
                <div
                  className="content-editor"
                  dangerouslySetInnerHTML={{ __html: data.description }}
                />
              </ContentDetail>
            )}
          </div>
        )}
      </WrapNotepadDetail>
    </main>
  );
};

export default NotepadDetail;
