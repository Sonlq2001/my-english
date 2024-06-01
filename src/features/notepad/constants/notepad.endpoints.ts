export enum NotepadEndpointsEnum {
  CREATE_NOTEPAD = "/notepad/create",
  GET_LIST_NOTEPADS = "/notepad/list",
  GET_NOTEPAD = "/notepad/detail/:notepad_id",
  DELETE_NOTEPAD = "/notepad/delete/:notepad_id",
  UPDATE_NOTEPAD = "/notepad/update/:notepad_id",
}
