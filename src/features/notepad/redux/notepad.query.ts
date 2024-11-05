import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithAuth } from "@app/features/setting/helpers/get-base-query-auth";
import { QueryParamsUrl } from "@app/types/app.types";

import { NotepadEndpointsEnum } from "../constants/notepad.endpoints";
import { ResNotepadItem } from "../notepad";

export const notepadQuery = createApi({
  reducerPath: "notepadQuery",
  baseQuery: baseQueryWithAuth,
  endpoints: (build) => ({
    getListNotepads: build.query<ResNotepadItem[], QueryParamsUrl>({
      query: (params) => {
        return {
          url: NotepadEndpointsEnum.GET_LIST_NOTEPADS,
          params,
        };
      },
    }),
  }),
});

export const { useGetListNotepadsQuery } = notepadQuery;
