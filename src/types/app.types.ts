import { ReactNode, FC } from "react";

export type NavbarMenus = {
  id: string;
  icon: ReactNode | FC;
  path: string;
  label: string;
};

export type OptionsType = {
  label: string;
  value: string;
}[];

export type BaseResponse<T> = {
  message: string;
  status: number;
  metadata: T;
};
