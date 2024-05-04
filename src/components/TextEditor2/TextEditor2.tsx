import { FC } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";

import MenuEditor from "./MenuEditor/MenuEditor";
import { WrapContentEditor, WrapTextEditor } from "./TextEditor2.styles";

const extensions = [
  StarterKit,
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  Highlight.configure({ multicolor: true }),
  Underline,
];

const TextEditor2: FC = () => {
  const editor = useEditor({
    extensions,
  });

  if (!editor) {
    return null;
  }

  return (
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
  );
};

export default TextEditor2;
