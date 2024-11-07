/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, FC } from "react";
import { TABS_UPLOAD } from "@app/constants/icon-editor-list.constants";

export type NavbarMenus = {
  id: string;
  icon: ReactNode | FC;
  path: string;
  label: string;
  customActive?: boolean;
};

export type OptionsType = {
  label: string;
  value: string | number;
}[];

export type BaseResponse<T> = {
  data: T;
  meta: {
    total: number;
  };
};

export type MenuEditors<T> = {
  icon: FC;
  key: T;
  custom?: any;
  title?: string;
};

export type TypeMenuImage = {
  link: File | string;
  alt: string;
  tab: TABS_UPLOAD;
};

export type QueryParamsUrl = {
  page: number;
  perPage: number;
  type?: TypePodCast;
  filter?: string;
};

export type TypePodCast = "VIDEO" | "AUDIO";
