import { FC, ElementType } from "react";
import { Editor as CoreEditor } from "@tiptap/core";
import clsx from "clsx";

import {
  IconEditorList,
  KeysEditor,
} from "@app/constants/icon-editor-list.constants";

import { WrapMenuEditor } from "./MenuEditor.styles";

interface MenuEditorProps {
  editor: CoreEditor;
}

const MenuEditor: FC<MenuEditorProps> = ({ editor }) => {
  const handleMenuItem = (key: KeysEditor) => {
    switch (key) {
      case KeysEditor.Bold:
        editor.chain().focus().toggleBold().run();
        break;
      case KeysEditor.Italic:
        editor.chain().focus().toggleItalic().run();
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
      default:
        break;
    }
  };

  return (
    <WrapMenuEditor>
      {IconEditorList.map((menu, index) => {
        const IconMenu = menu.icon as ElementType;
        return (
          <button
            title={menu.title}
            className={clsx(
              "btn-menu",
              editor.isActive(menu?.custom ? menu.custom[menu.key] : menu.key)
                ? "is-active"
                : ""
            )}
            type="button"
            key={index}
            onClick={() => handleMenuItem(menu.key)}
          >
            <IconMenu />
          </button>
        );
      })}
    </WrapMenuEditor>
  );
};

export default MenuEditor;
