import { RuleSet } from "styled-components";

export type Attributes = {
  size?: "small" | "medium" | "large";
  variant?: "text" | "contained" | "outlined";
  disabled?: boolean;
};

export type ObjectRulesCss = { [key: string]: RuleSet };
