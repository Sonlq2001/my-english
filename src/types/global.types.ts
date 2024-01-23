import { ThemeColors } from "@app/styles/theme/theme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeColors {}
}
