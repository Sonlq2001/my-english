import { lazy } from "react";

import { RouteItemDef } from "@app/types/routes.types";
import DashboardLayout from "@app/layouts/DashboardLayout/DashboardLayout";

import { DashboardPathsEnum } from "../constants/dashboard.paths";

const DashboardScreen = lazy(() => import("../screens/DashboardScreen"));

const DASHBOARD_SCREEN: RouteItemDef = {
  id: "dashboard-screen",
  path: DashboardPathsEnum.DASHBOARD,
  component: DashboardScreen,
  layout: DashboardLayout,
};

export const DASHBOARD_ROUTES = [DASHBOARD_SCREEN];
