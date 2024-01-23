export type ThemeColors = {
  palette: {
    primary: {
      main?: string;
      light?: string;
      dark?: string;
      contrastText?: string;
    };
    background: {
      lightBg?: string;
    };
    white?: string;
  };
};

export const Theme: ThemeColors = {
  palette: {
    primary: {
      main: "#0B60B0",
      light: "#40A2D8",
      dark: "#365486",
      contrastText: "#fff",
    },
    background: {
      lightBg: "rgba(110, 164, 255, 0.2)",
    },
    white: "#fff",
  },
};
