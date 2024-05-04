import { FC } from "react";
import { Formik, Form } from "formik";
import { Editor as CoreEditor } from "@tiptap/core";

import TextField from "@app/components/TextField/TextField";
import Modal from "@app/components/Modal/Modal";
import { schemaInsertLink } from "@app/helpers/text-editor.helper";

interface MenuLinkProps {
  setIsOpenLink: (open: false) => void;
  editor: CoreEditor;
}

const MenuLink: FC<MenuLinkProps> = ({ setIsOpenLink, editor }) => {
  const handleSubmitLink = ({ link }: { link: string }) => {
    if (link) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: link, target: "_blank" })
        .run();
      setIsOpenLink(false);
      return;
    }

    editor.chain().focus().extendMarkRange("link").unsetLink().run();
    setIsOpenLink(false);
  };

  const handleUnsetLink = () => {
    editor.chain().focus().unsetLink().run();
    setIsOpenLink(false);
  };

  return (
    <Formik
      initialValues={{ link: editor.getAttributes("link").href || "" }}
      onSubmit={handleSubmitLink}
      validationSchema={schemaInsertLink}
    >
      {({ submitForm }) => (
        <Modal
          open
          textOK="Apply"
          title="Insert Link"
          onClosed={() => setIsOpenLink(false)}
          onSubmit={submitForm}
          isSubButton
          textSub="Unset link"
          onCancel={handleUnsetLink}
          disabledSub={!editor.isActive("link")}
        >
          <Form>
            <TextField
              label="Link URL"
              name="link"
              fullWidth
              placeholder="Paste or type a link"
            />
          </Form>
        </Modal>
      )}
    </Formik>
  );
};

export default MenuLink;
