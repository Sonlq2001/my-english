import { FC, memo, useRef } from "react";
import SunEditor from "suneditor-react";
import SunEditorCore from "suneditor/src/lib/core";
import { Field, FieldProps } from "formik";

import HelperText from "../HelperText/HelperText";
import { WrapTextEditor } from "./TextEditor.styles";

interface TextEditorProps {
  label?: string;
  name: string;
  isRequire?: boolean;
}

const TextEditor: FC<TextEditorProps> = ({ label, name, isRequire }) => {
  const instanceSunEditor = useRef<SunEditorCore>();

  return (
    <Field name={name}>
      {({ form, meta }: FieldProps) => {
        const isError = meta.touched && meta.error;
        return (
          <div>
            <WrapTextEditor>
              {label && (
                <label htmlFor={label}>
                  {label}
                  {isRequire && <span className="label-require">*</span>}
                </label>
              )}
              <SunEditor
                // defaultValue="<h3>Le Quang Son</h3>"
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
                getSunEditorInstance={(sunEditor) => {
                  instanceSunEditor.current = sunEditor;
                }}
                onChange={(e) => {
                  if (instanceSunEditor.current) {
                    const wysiwyg =
                      instanceSunEditor.current.core.context.element.wysiwyg;
                    if (
                      isRequire &&
                      instanceSunEditor.current?.util.onlyZeroWidthSpace(
                        wysiwyg?.textContent || ""
                      ) &&
                      !wysiwyg?.querySelector(
                        ".se-component, pre, blockquote, hr, li, table, img, iframe, video"
                      ) &&
                      (wysiwyg.innerHTML.match(/\n/g) || "").length <= 1
                    ) {
                      form.setFieldValue(name, "");
                      return;
                    }
                  }
                  form.setFieldValue(name, e);
                }}
              />
            </WrapTextEditor>

            {isError && typeof meta.error === "string" && (
              <HelperText text={meta.error} />
            )}
          </div>
        );
      }}
    </Field>
  );
};

export default memo(TextEditor);
