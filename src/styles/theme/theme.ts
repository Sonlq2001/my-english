type ColorHue = {
  thin?: number | string;
  extraLight?: number | string;
  light?: number | string;
  normal?: number | string;
  medium?: number | string;
  semibold?: number | string;
  bold?: number | string;
  extrabold?: number | string;
  black?: number | string;
};

export type ThemeColors = {
  palette: {
    primary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    background: {
      lightBg: string;
    };
    white: string;
    button: {
      lightBg: string;
    };
    disabled: {
      disabledColor: string;
      disabledBg: string;
    };
    weight: ColorHue;
    gray: ColorHue;
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
    weight: {
      thin: 100,
      extraLight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    gray: {
      medium: "#999999",
      semibold: "#777777",
      bold: "#555555",
      extrabold: "#333333",
      black: "#111111",
    },
  },
};
