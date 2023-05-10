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
        1: "#F8FAFC",
      },
      white: "#FFF",
      green: "#649263",
      blue: {
        100: "#F1F6F9",
        200: "#E3ECF3",
        500: "#5590B4",
        600: "#457B9D",
        800: "#2C4E63",
      },
      red: { 500: "#E63946", 700: "rgb(218 5 5)" },
    },
  },
};
