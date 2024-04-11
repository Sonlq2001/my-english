import { lazy } from "react";

import { RouteItemDef } from "@app/types/routes.types";
import BlankLayout from "@app/layouts/BlankLayout/BlankLayout";

import { AuthPathsEnum } from "../constants/auth.paths";

const LoginScreen = lazy(() => import("../screens/LoginScreen/LoginScreen"));

const SIGN_IN_SCREEN: RouteItemDef = {
  id: "login-screen",
  path: AuthPathsEnum.LOGIN,
  component: LoginScreen,
  layout: BlankLayout,
};

export const AUTH_ROUTES = [SIGN_IN_SCREEN];
