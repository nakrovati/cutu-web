/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "components/**/*.vue",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "app.vue",
    "error.vue",
  ],
  theme: {
    colors: {
      surface: {
        1: "#eff8ff",
        dark: {
          1: "#1a1d26",
          2: "#2f323a",
        },
      },
      grey: "#7a7a7a",
      white: { DEFAULT: "#fff", dark: "#f9fafb" },
      black: "#000",
      green: "#38862a",
      blue: {
        100: "#daecff",
        200: "#bddfff",
        500: "#358dfc",
        600: "#1e6ef2",
        700: "#1758de",
        800: "#1947b4",
        dark: {
          200: "#a2beff",
        },
      },
      red: { 500: "#ea546c", 600: "#d5294d" },
    },
  },
};
