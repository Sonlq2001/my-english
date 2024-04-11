import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const notepadApi = createApi({
  reducerPath: "notepadApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API,
  }),
  endpoints: (build) => ({
    getVocabulary: build.query<
      { id: string; avatar: string; name: string; createdAt: string }[],
      void
    >({
      query: () => "",
    }),
  }),
});

export const { useGetVocabularyQuery } = notepadApi;
