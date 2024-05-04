import { Level } from "@tiptap/extension-heading";

import IconBold from "@app/assets/images/icon-svg/editor/icon-bold.svg?react";
import IconItalic from "@app/assets/images/icon-svg/editor/icon-italic.svg?react";
import IconBlockquote from "@app/assets/images/icon-svg/editor/icon-blockquote.svg?react";
import IconBulletList from "@app/assets/images/icon-svg/editor/icon-bullet-list.svg?react";
import IconOrderList from "@app/assets/images/icon-svg/editor/icon-order-list.svg?react";
import IconCode from "@app/assets/images/icon-svg/editor/icon-code.svg?react";
import IconCodeBlock from "@app/assets/images/icon-svg/editor/icon-code-block.svg?react";
import IconStrike from "@app/assets/images/icon-svg/editor/icon-strike.svg?react";
import IconAlignLeft from "@app/assets/images/icon-svg/editor/icon-align-left.svg?react";
import IconAlignCenter from "@app/assets/images/icon-svg/editor/icon-align-center.svg?react";
import IconAlignRight from "@app/assets/images/icon-svg/editor/icon-align-right.svg?react";
import IconHorizontalRule from "@app/assets/images/icon-svg/editor/icon-horizontal-rule.svg?react";
import IconHardBreak from "@app/assets/images/icon-svg/editor/icon-hard-break.svg?react";
import IconUndo from "@app/assets/images/icon-svg/editor/icon-undo.svg?react";
import IconRedo from "@app/assets/images/icon-svg/editor/icon-redo.svg?react";
import IconHightLight from "@app/assets/images/icon-svg/editor/icon-hight-light.svg?react";
import IconUnderLine from "@app/assets/images/icon-svg/editor/icon-underline.svg?react";
import IconHeading from "@app/assets/images/icon-svg/editor/icon-heading.svg?react";
import IconHeading1 from "@app/assets/images/icon-svg/editor/icon-heading-1.svg?react";
import IconHeading2 from "@app/assets/images/icon-svg/editor/icon-heading-2.svg?react";
import IconHeading3 from "@app/assets/images/icon-svg/editor/icon-heading-3.svg?react";
import IconHeading4 from "@app/assets/images/icon-svg/editor/icon-heading-4.svg?react";
import IconHeading5 from "@app/assets/images/icon-svg/editor/icon-heading-5.svg?react";
import IconHeading6 from "@app/assets/images/icon-svg/editor/icon-heading-6.svg?react";
import IconImage from "@app/assets/images/icon-svg/editor/icon-image.svg?react";

import { MenuEditors } from "@app/types/app.types";

export enum KeysEditor {
  Bold = "bold",
  Italic = "italic",
  Heading = "heading",
  Blockquote = "blockquote",
  BulletList = "bulletList",
  OrderList = "orderedList",
  Code = "code",
  CodeBlock = "codeBlock",
  Strike = "strike",
  AlignLeft = "left",
  AlignCenter = "center",
  AlignRight = "right",
  HorizontalRule = "horizontalRule",
  HardBreak = "hardBreak",
  Undo = "undo",
  Redo = "redo",
  HightLight = "highlight",
  UnderLine = "underline",
  Image = "image",
}

export const IconEditorList: MenuEditors<KeysEditor>[] = [
  { icon: IconBold, key: KeysEditor.Bold, title: "Bold" },
  { icon: IconItalic, key: KeysEditor.Italic, title: "Italic" },
  { icon: IconHeading, key: KeysEditor.Heading, title: "Heading" },
  { icon: IconBlockquote, key: KeysEditor.Blockquote, title: "Blockquote" },
  { icon: IconBulletList, key: KeysEditor.BulletList, title: "BulletList" },
  { icon: IconOrderList, key: KeysEditor.OrderList, title: "OrderList" },
  { icon: IconStrike, key: KeysEditor.Strike, title: "Strike" },
  {
    icon: IconAlignLeft,
    key: KeysEditor.AlignLeft,
    custom: {
      left: {
        textAlign: "left",
      },
    },
    title: "AlignLeft",
  },
  {
    icon: IconAlignCenter,
    key: KeysEditor.AlignCenter,
    custom: {
      center: {
        textAlign: "center",
      },
    },
    title: "AlignCenter",
  },
  {
    icon: IconAlignRight,
    key: KeysEditor.AlignRight,
    custom: {
      right: {
        textAlign: "right",
      },
    },
    title: "AlignRight",
  },
  {
    icon: IconHorizontalRule,
    key: KeysEditor.HorizontalRule,
    title: "HorizontalRule",
  },
  { icon: IconHardBreak, key: KeysEditor.HardBreak, title: "HardBreak" },
  {
    icon: IconHightLight,
    key: KeysEditor.HightLight,
    title: "HightLight",
  },
  { icon: IconUnderLine, key: KeysEditor.UnderLine, title: "UnderLine" },
  { icon: IconCode, key: KeysEditor.Code, title: "Code" },
  { icon: IconCodeBlock, key: KeysEditor.CodeBlock, title: "CodeBlock" },
  { icon: IconImage, key: KeysEditor.Image, title: "Image" },
  { icon: IconUndo, key: KeysEditor.Undo, title: "Undo" },
  { icon: IconRedo, key: KeysEditor.Redo, title: "Redo" },
];

export enum KeysHeadings {
  Heading1 = "Heading1",
  Heading2 = "Heading2",
  Heading3 = "Heading3",
  Heading4 = "Heading4",
  Heading5 = "Heading5",
  Heading6 = "Heading6",
}

export const ListHeading: (MenuEditors<KeysHeadings> & { level: Level })[] = [
  {
    icon: IconHeading1,
    key: KeysHeadings.Heading1,
    title: "Heading 1",
    level: 1,
  },
  {
    icon: IconHeading2,
    key: KeysHeadings.Heading1,
    title: "Heading 2",
    level: 2,
  },
  {
    icon: IconHeading3,
    key: KeysHeadings.Heading3,
    title: "Heading 3",
    level: 3,
  },
  {
    icon: IconHeading4,
    key: KeysHeadings.Heading4,
    title: "Heading 4",
    level: 4,
  },
  {
    icon: IconHeading5,
    key: KeysHeadings.Heading5,
    title: "Heading 5",
    level: 5,
  },
  {
    icon: IconHeading6,
    key: KeysHeadings.Heading6,
    title: "Heading 6",
    level: 6,
  },
];

export const ID_IGNORE_HEADING = "id-ignore-heading";

export enum TABS_UPLOAD {
  INSERT_LINK = 1,
  UPLOAD = 2,
}

export const TABS_UPLOAD_IMAGES = [
  {
    title: "Insert from URL",
    value: TABS_UPLOAD.INSERT_LINK,
  },
  {
    title: "Upload",
    value: TABS_UPLOAD.UPLOAD,
  },
];
