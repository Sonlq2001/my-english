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
    button: {
      lightBg?: string;
    };
    disabled: {
      disabledColor?: string;
      disabledBg?: string;
    };
  };
};

export const Theme: ThemeColors = {
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
    },
    background: {
      lightBg: "rgba(110, 164, 255, 0.2)",
    },
    white: "#fff",
    button: {
      lightBg: "rgba(25, 118, 210, 0.04)",
    },
    disabled: {
      disabledColor: "rgba(0, 0, 0, 0.26)",
      disabledBg: "rgba(0, 0, 0, 0.12)",
    },
  },
};
