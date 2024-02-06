import { ReactNode, FC } from "react";

export type NavbarMenus = {
  id: string;
  icon: ReactNode | FC;
  path: string;
  label: string;
};
