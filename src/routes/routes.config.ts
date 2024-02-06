import { DASHBOARD_ROUTES } from "@app/features/dashboard/dashboard";
import { LISTENING_ROUTES } from "@app/features/listening/listening";
import { READING_ROUTES } from "@app/features/Reading/reading";

export const LIST_ROUTES = [
  ...DASHBOARD_ROUTES,
  ...LISTENING_ROUTES,
  ...READING_ROUTES,
];
