/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeColors } from "@app/styles/theme/theme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeColors {}
}

declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}
