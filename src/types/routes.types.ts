import { FC } from "react";

export type RouteItemDef = {
  id: string;

  path: string;

  component?: FC;

  layout?: FC;

  isPrivateRoute?: boolean;

  isAuthRoute?: boolean;

  subMenu?: RouteItemDef[];

  index?: boolean;
};
