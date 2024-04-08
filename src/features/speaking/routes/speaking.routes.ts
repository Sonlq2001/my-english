import { lazy } from "react";

import { RouteItemDef } from "@app/types/routes.types";

import { SpeakingPathsEnum } from "../constants/speaking.paths";

const SpeakingScreen = lazy(
  () => import("../screens/SpeakingScreen/SpeakingScreen")
);
const VoiceToTextScreen = lazy(
  () => import("../screens/VoiceToTextScreen/VoiceToTextScreen")
);

const SPEAKING_SCREEN: RouteItemDef = {
  id: "speaking-screen",
  path: SpeakingPathsEnum.SPEAKING,
  component: SpeakingScreen,
};

const VOICE_TO_TEXT_SCREEN: RouteItemDef = {
  id: "voice-to-text-screen",
  path: SpeakingPathsEnum.VOICE_TO_TEXT,
  component: VoiceToTextScreen,
};

export const SPEAKING_ROUTES = [SPEAKING_SCREEN, VOICE_TO_TEXT_SCREEN];
