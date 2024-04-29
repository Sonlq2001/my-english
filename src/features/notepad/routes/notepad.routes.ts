import { lazy } from "react";

import { RouteItemDef } from "@app/types/routes.types";

import { NotepadPathsEnum } from "../constants/notepad.paths";

const NotepadScreen = lazy(
  () => import("../screens/NotepadScreen/NotepadScreen")
);
const CreateNotepad = lazy(
  () => import("../screens/CreateNotepad/CreateNotepad")
);
const NotepadDetail = lazy(
  () => import("../screens/NotepadDetail/NotepadDetail")
);

const NOTEPAD_SCREEN: RouteItemDef = {
  id: "notepad-screen",
  path: NotepadPathsEnum.NOTEPAD,
  component: NotepadScreen,
};

const CREATE_NOTEPAD: RouteItemDef = {
  id: "create-screen",
  path: NotepadPathsEnum.CREATE_NOTEPAD,
  component: CreateNotepad,
  isPrivateRoute: true,
};

const NOTEPAD_DETAIL: RouteItemDef = {
  id: "notepad-detail-screen",
  path: NotepadPathsEnum.NOTEPAD_DETAIL,
  component: NotepadDetail,
};

export const NOTEPAD_ROUTES = [NOTEPAD_SCREEN, CREATE_NOTEPAD, NOTEPAD_DETAIL];
