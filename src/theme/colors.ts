import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
    primary: "#ffbd2e",
    primaryBright: "#ffbd2e",
    primaryDark: "#ffbd2e",
  secondary: "#cf1020",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
    text: "#ff0303",
  textDisabled: "#BDC2C4",
    textSubtle: "#c20202",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
    secondary: "#cf1020",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
    text: "#cf1020",
  textDisabled: "#666171",
    textSubtle: "#630707",
  borderColor: "#524B63",
    card: "#000000",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
