/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "Plus-Jakarta-Sans": ["Plus Jakarta Sans", "sans-serif"],
      },

      backgroundImage: {
        "custom-gradient": "#FF7F3E",
      },

      colors: {
        dark: "#1e293b",
        darkGray: "#334155",
        darkLight: "#0f172a",
        grayLight: "#919eab",
        primary: {
          DEFAULT: "#00a76f14",
          light: "#00a76f",
          lighter: "#5be49b",
        },
      },
    },
  },
  plugins: [],
};
/* List */
