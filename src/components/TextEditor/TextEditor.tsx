import { FC, memo } from "react";
import SunEditor from "suneditor-react";

import { WrapTextEditor } from "./TextEditor.styles";

interface TextEditorProps {
  label?: string;
}

const TextEditor: FC<TextEditorProps> = ({ label }) => {
  return (
    <WrapTextEditor>
      {label && <label htmlFor={label}>{label}</label>}
      <SunEditor
        name="my-editor"
        defaultValue="<h3>Le Quang Son</h3>"
        placeholder="Enter your notes"
        autoFocus
        width="100%"
        setOptions={{
          buttonList: [
            ["undo", "redo"],
            ["font", "fontSize"],
            ["paragraphStyle", "blockquote"],
            ["table", "image", "link"],
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript",
            ],
            ["fontColor", "hiliteColor"],
            ["align", "list", "lineHeight"],
            ["outdent", "indent"],
            ["removeFormat"],
          ],
        }}
      />
    </WrapTextEditor>
  );
};

export default memo(TextEditor);
