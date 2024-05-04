import { FC } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
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

export enum KeysEditor {
  Bold = "bold",
  Italic = "italic",
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
}

export const IconEditorList: {
  icon: FC;
  key: KeysEditor;
  custom?: any;
  title?: string;
}[] = [
  { icon: IconBold, key: KeysEditor.Bold, title: "Bold" },
  { icon: IconItalic, key: KeysEditor.Italic, title: "Italic" },
  { icon: IconBlockquote, key: KeysEditor.Blockquote },
  { icon: IconBulletList, key: KeysEditor.BulletList },
  { icon: IconOrderList, key: KeysEditor.OrderList },
  { icon: IconCode, key: KeysEditor.Code },
  { icon: IconCodeBlock, key: KeysEditor.CodeBlock },
  { icon: IconStrike, key: KeysEditor.Strike },
  {
    icon: IconAlignLeft,
    key: KeysEditor.AlignLeft,
    custom: {
      left: {
        textAlign: "left",
      },
    },
  },
  {
    icon: IconAlignCenter,
    key: KeysEditor.AlignCenter,
    custom: {
      center: {
        textAlign: "center",
      },
    },
  },
  {
    icon: IconAlignRight,
    key: KeysEditor.AlignRight,
    custom: {
      right: {
        textAlign: "right",
      },
    },
  },
  { icon: IconHorizontalRule, key: KeysEditor.HorizontalRule },
  { icon: IconHardBreak, key: KeysEditor.HardBreak },
  { icon: IconUndo, key: KeysEditor.Undo },
  { icon: IconRedo, key: KeysEditor.Redo },
  {
    icon: IconHightLight,
    key: KeysEditor.HightLight,
  },
  { icon: IconUnderLine, key: KeysEditor.UnderLine },
];
