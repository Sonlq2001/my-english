import { DASHBOARD_ROUTES } from "@app/features/dashboard/dashboard";
import { LISTENING_ROUTES } from "@app/features/listening/listening";
import { READING_ROUTES } from "@app/features/reading/reading";
import { SPEAKING_ROUTES } from "@app/features/speaking/speaking";
import { VOCABULARY_ROUTES } from "@app/features/vocabulary/vocabulary";
import { NOTEPAD_ROUTES } from "@app/features/notepad/notepad";
import { WRITING_ROUTES } from "@app/features/writing/writing";
import { AUTH_ROUTES } from "@app/features/auth/auth";

export const LIST_ROUTES = [
  ...DASHBOARD_ROUTES,
  ...LISTENING_ROUTES,
  ...READING_ROUTES,
  ...SPEAKING_ROUTES,
  ...VOCABULARY_ROUTES,
  ...NOTEPAD_ROUTES,
  ...WRITING_ROUTES,
  ...AUTH_ROUTES,
];
