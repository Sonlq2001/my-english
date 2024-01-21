import { DASHBOARD_ROUTES } from "@app/features/Dashboard/dashboard";
import { LISTENING_ROUTES } from "@app/features/Listening/listening";
import { READING_ROUTES } from "@app/features/Reading/reading";

export const LIST_ROUTES = [
  ...DASHBOARD_ROUTES,
  ...LISTENING_ROUTES,
  ...READING_ROUTES,
];
