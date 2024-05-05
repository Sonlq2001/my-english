import { FC, ElementType, useState } from "react";
import { Editor as CoreEditor } from "@tiptap/core";
import clsx from "clsx";

import {
  ID_IGNORE_HEADING,
  IconEditorList,
  KeysEditor,
} from "@app/constants/icon-editor-list.constants";

import { WrapMenuEditor } from "./MenuEditor.styles";
import MenuHeading from "../MenuHeading/MenuHeading";
import MenuImage from "../MenuImage/MenuImage";
import MenuLink from "../MenuLink/MenuLink";

interface MenuEditorProps {
  editor: CoreEditor;
}

const MenuEditor: FC<MenuEditorProps> = ({ editor }) => {
  const [isOpenHeading, setIsOpenHeading] = useState<boolean>(false);
  const [isOpenImage, setIsOpenImage] = useState<boolean>(false);
  const [isOpenLink, setIsOpenLink] = useState<boolean>(false);

  const handleMenuItem = (key: KeysEditor) => {
    switch (key) {
      case KeysEditor.Bold:
        editor.chain().focus().toggleBold().run();
        break;
      case KeysEditor.Italic:
        editor.chain().focus().toggleItalic().run();
        break;
      case KeysEditor.Heading:
        setIsOpenHeading(!isOpenHeading);
        break;
      case KeysEditor.Strike:
        editor.chain().focus().toggleStrike().run();
        break;
      case KeysEditor.Code:
        editor.chain().focus().toggleCode().run();
        break;
      case KeysEditor.BulletList:
        editor.chain().focus().toggleBulletList().run();
        break;
      case KeysEditor.OrderList:
        editor.chain().focus().toggleOrderedList().run();
        break;
      case KeysEditor.AlignLeft:
        editor.chain().focus().setTextAlign("left").run();
        break;
      case KeysEditor.AlignRight:
        editor.chain().focus().setTextAlign("right").run();
        break;
      case KeysEditor.AlignCenter:
        editor.chain().focus().setTextAlign("center").run();
        break;
      case KeysEditor.HightLight:
        editor.chain().focus().toggleHighlight().run();
        break;
      case KeysEditor.Blockquote:
        editor.chain().focus().toggleBlockquote().run();
        break;
      case KeysEditor.CodeBlock:
        editor.chain().focus().toggleCodeBlock().run();
        break;
      case KeysEditor.HardBreak:
        editor.chain().focus().setHardBreak().run();
        break;
      case KeysEditor.HorizontalRule:
        editor.chain().focus().setHorizontalRule().run();
        break;
      case KeysEditor.Redo:
        editor.chain().focus().redo().run();
        break;
      case KeysEditor.UnderLine:
        editor.chain().focus().toggleUnderline().run();
        break;
      case KeysEditor.Undo:
        editor.chain().focus().undo().run();
        break;
      case KeysEditor.Image:
        setIsOpenImage(!isOpenImage);
        break;
      case KeysEditor.Link:
        setIsOpenLink(!isOpenLink);
        break;
      default:
        break;
    }
  };

  const isCheckDisabled = (key: KeysEditor) => {
    switch (key) {
      case KeysEditor.Bold:
        return !editor.can().chain().focus().toggleBold().run();
      case KeysEditor.Italic:
        return !editor.can().chain().focus().toggleItalic().run();
      case KeysEditor.Code:
        return !editor.can().chain().focus().toggleCode().run();
      case KeysEditor.Strike:
        return !editor.can().chain().focus().toggleStrike().run();
      case KeysEditor.Undo:
        return !editor.can().chain().focus().undo().run();
      case KeysEditor.Redo:
        return !editor.can().chain().focus().redo().run();
      default:
        return false;
    }
  };

  return (
    <WrapMenuEditor>
      {IconEditorList.map((menu, index) => {
        const IconMenu = menu.icon as ElementType;
        const isHeading = menu.key === KeysEditor.Heading;
        const isActiveMenu =
          editor.isActive(menu?.custom ? menu.custom[menu.key] : menu.key) ||
          (isOpenHeading && isHeading);

        return (
          <button
            title={menu.title}
            className={clsx("btn-menu", isActiveMenu ? "is-active" : "")}
            type="button"
            key={index}
            onClick={() => handleMenuItem(menu.key)}
            disabled={isCheckDisabled(menu.key)}
          >
            <IconMenu id={isHeading ? ID_IGNORE_HEADING : ""} />
          </button>
        );
      })}

      {isOpenHeading && (
        <MenuHeading setIsOpenHeading={setIsOpenHeading} editor={editor} />
      )}

      {isOpenImage && (
        <MenuImage setIsOpenImage={setIsOpenImage} editor={editor} />
      )}

      {isOpenLink && <MenuLink setIsOpenLink={setIsOpenLink} editor={editor} />}
    </WrapMenuEditor>
  );
};

export default MenuEditor;
