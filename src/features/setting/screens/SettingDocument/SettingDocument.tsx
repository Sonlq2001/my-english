import { useState } from "react";

import AppButton from "@app/components/AppButton/AppButton";
import {
  useDeleteDocumentMutation,
  useGetListDocumentsQuery,
} from "@app/features/reading/reading";
import TitleSetting from "@app/features/setting/components/TitleSetting/TitleSetting";
import IconTrash from "@app/assets/images/icon-svg/icon-trash.svg?react";
import IconWritingNotepad from "@app/assets/images/icon-svg/icon-pencil.svg?react";
import IconWarning from "@app/assets/images/icon-svg/icon-warning.svg?react";
import IconPlus from "@app/assets/images/icon-svg/icon-plus.svg?react";
import {
  ContentConfirm,
  HeaderSetting,
  Table,
  WrapAction,
  WrapTable,
} from "@app/features/setting/screens/SettingPodcast/SettingPodcast.styles";
import {
  SettingPathsEnum,
  SettingSubPathsEnum,
} from "@app/features/setting/setting";
import { formatDate } from "@app/helpers/time";
import Modal from "@app/components/Modal/Modal";

const HEADER_CELLS = ["STT", "Title", "Time", "Action"];

const SettingDocument = () => {
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [documentId, setDocumentId] = useState<string | null>(null);
  const { data: listDocuments, refetch } = useGetListDocumentsQuery({
    page: 1,
    perPage: 10,
  });

  const [mutationDeleteDocument] = useDeleteDocumentMutation();

  return (
    <main>
      <TitleSetting title="Document" subtitle="Customize your document" />

      <HeaderSetting>
        <AppButton
          size="small"
          to={`${SettingPathsEnum.SETTINGS}/${SettingSubPathsEnum.DOCUMENT_CREATE}`}
          leftIcon={<IconPlus />}
          variant="outlined"
        />
      </HeaderSetting>

      <WrapTable>
        {listDocuments?.data && listDocuments.data.length > 0 && (
          <Table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                {HEADER_CELLS.map((cell) => (
                  <th key={cell}>{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {listDocuments.data.map((doc, index) => (
                <tr key={doc.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{index + 1}</td>
                  <td>{doc.title}</td>
                  <td>
                    <i>{formatDate(doc.createdAt)}</i>
                  </td>
                  <td>
                    <WrapAction>
                      <AppButton
                        size="small"
                        to={`${
                          SettingPathsEnum.SETTINGS
                        }/${SettingSubPathsEnum.DOCUMENT_EDIT.replace(
                          ":document_id",
                          doc.id
                        )}`}
                        variant="outlined"
                        leftIcon={<IconWritingNotepad />}
                      />
                      <AppButton
                        size="small"
                        variant="outlined"
                        leftIcon={<IconTrash />}
                        onClick={() => {
                          setIsOpenModalDelete(true);
                          setDocumentId(doc.id);
                        }}
                      />
                    </WrapAction>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </WrapTable>

      {isOpenModalDelete && documentId && (
        <Modal
          title="You really want to delete !"
          open
          onClosed={() => setIsOpenModalDelete(false)}
          textOK="Delete"
          onSubmit={async () => {
            await mutationDeleteDocument(documentId);
            refetch();
            setIsOpenModalDelete(false);
          }}
        >
          <ContentConfirm>
            <IconWarning />
            <p>You will not be able to restore it after deletion.</p>
          </ContentConfirm>
        </Modal>
      )}
    </main>
  );
};

export default SettingDocument;
