/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "components/**/*.vue",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "app.vue",
  ],
  theme: {
    colors: {
      surface: {
        1: "#eff8ff",
      },
      grey: "#7a7a7a",
      white: "#FFF",
      green: "#38862a",
      blue: {
        100: "#daecff",
        200: "#bddfff",
        500: "#358dfc",
        600: "#1e6ef2",
        700: "#1758de",
        800: "#1947b4",
      },
      red: { 500: "#E63946", 700: "rgb(218 5 5)" },
    },
  },
};
