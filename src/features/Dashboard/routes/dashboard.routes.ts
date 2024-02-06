import { lazy } from "react";

import { RouteItemDef } from "@app/types/routes.types";

const DashboardScreen = lazy(() => import("../screens/DashboardScreen"));
import DashboardLayout from "@app/layouts/DashboardLayout/DashboardLayout";

const DASHBOARD_SCREEN: RouteItemDef = {
  id: "dashboard-screen",
  path: "/",
  component: DashboardScreen,
  layout: DashboardLayout,
};

export const DASHBOARD_ROUTES = [DASHBOARD_SCREEN];
