import { lazy } from "react";

import { RouteItemDef } from "@app/types/routes.types";
import BlankLayout from "@app/layouts/BlankLayout/BlankLayout";

import { AuthPathsEnum } from "../constants/auth.paths";

const LoginScreen = lazy(() => import("../screens/LoginScreen/LoginScreen"));
const LoginSuccessScreen = lazy(
  () => import("../screens/LoginSuccessScreen/LoginSuccessScreen")
);

const LOGIN_SCREEN: RouteItemDef = {
  id: "login-screen",
  path: AuthPathsEnum.LOGIN,
  component: LoginScreen,
  layout: BlankLayout,
  isAuthRoute: true,
};

const LOGIN_SUCCESS_SCREEN: RouteItemDef = {
  id: "login-success-screen",
  path: AuthPathsEnum.LOGIN_SUCCESS,
  component: LoginSuccessScreen,
  layout: BlankLayout,
  isAuthRoute: true,
};

export const AUTH_ROUTES = [LOGIN_SCREEN, LOGIN_SUCCESS_SCREEN];
