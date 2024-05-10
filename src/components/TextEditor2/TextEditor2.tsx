import { FC, memo } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";

import MenuEditor from "./MenuEditor/MenuEditor";
import { Wrap, WrapContentEditor, WrapTextEditor } from "./TextEditor.styles";

const extensions = [
  StarterKit,
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  Highlight.configure({ multicolor: true }),
  Underline,
  Link.configure({
    protocols: ["ftp", "mailto"],
    openOnClick: "whenNotEditable",
  }),
  Image,
];

interface TextEditorProps {
  label?: string;
  isRequire?: boolean;
  getValue: (value: string) => void;
}

const TextEditor: FC<TextEditorProps> = ({
  label,
  isRequire = false,
  getValue,
}) => {
  const editor = useEditor({
    extensions,
    onUpdate: ({ editor }) => {
      const contentTextEditor = editor.getHTML();
      const isEmptyText = !editor.state.doc.textContent.trim().length;
      getValue(isEmptyText ? "" : contentTextEditor);
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <Wrap>
      {label && (
        <label htmlFor={label}>
          {label}
          {isRequire && <span className="label-require">*</span>}
        </label>
      )}
      <WrapTextEditor>
        <MenuEditor editor={editor} />

        <WrapContentEditor>
          <EditorContent
            editor={editor}
            placeholder="Enter your notes"
            content=""
            className="editor-tip-tab"
          />
        </WrapContentEditor>
      </WrapTextEditor>
    </Wrap>
  );
};

export default memo(TextEditor);
