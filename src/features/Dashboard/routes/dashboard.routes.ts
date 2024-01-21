import { lazy } from "react";

const DashboardScreen = lazy(() => import("../screens/DashboardScreen"));

const DASHBOARD_SCREEN = {
  id: "dashboard-screen",
  path: "/",
  component: DashboardScreen,
};

export const DASHBOARD_ROUTES = [DASHBOARD_SCREEN];
