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
