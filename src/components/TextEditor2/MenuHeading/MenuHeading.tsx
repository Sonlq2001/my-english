import { ElementType, FC } from "react";
import { Editor as CoreEditor } from "@tiptap/core";
import { Level } from "@tiptap/extension-heading";
import { clsx } from "clsx";

import ClickOutside from "@app/components/ClickOutside/ClickOutside";
import {
  ID_IGNORE_HEADING,
  ListHeading,
} from "@app/constants/icon-editor-list.constants";

import { WrapMenuHeading } from "./MenuHeading.styles";

interface MenuHeadingProps {
  setIsOpenHeading: (open: false) => void;
  editor: CoreEditor;
}

const MenuHeading: FC<MenuHeadingProps> = ({ setIsOpenHeading, editor }) => {
  const handleHeading = (level: Level) => {
    editor.chain().focus().toggleHeading({ level }).run();
    setIsOpenHeading(false);
  };

  return (
    <ClickOutside
      className="menu-heading"
      onOutsideClick={() => setIsOpenHeading(false)}
      idElementIgnore={ID_IGNORE_HEADING}
    >
      <WrapMenuHeading>
        {ListHeading.map((menu, index) => {
          const IconMenu = menu.icon as ElementType;
          return (
            <button
              type="button"
              className={clsx(
                "btn-heading",
                editor.isActive("heading", { level: menu.level })
                  ? "is-active"
                  : ""
              )}
              key={`btn-heading-${index}`}
              title={menu.title}
              onClick={() => handleHeading(menu.level)}
            >
              <IconMenu /> {menu.title}
            </button>
          );
        })}
      </WrapMenuHeading>
    </ClickOutside>
  );
};

export default MenuHeading;
