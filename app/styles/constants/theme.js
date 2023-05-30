const COLORS = {
  blue: "#1e40af",
  lightBlue: "#1d4ed8",
  darkBlue: "#111827",
  gray: "#c1c0c8",
  lightGray: "#e3e3e3",
  white: "#f3f4f8",
  lightWhite: "#fafafc",
  black: "#363636",
};

const FONT = {
  regular: "Iceland",
};

const SIZES = {
  xxSmall: 5,
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SHADOWS, SIZES };
