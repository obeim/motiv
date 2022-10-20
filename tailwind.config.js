/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      dm: "DM Sans, sans-serif",
    },
    extend: {
      colors: {
        primary: {
          dark: "#242731",
          white: "#E0E4E7",
          purple: "#A162F7",
        },
        secondary: {
          purple: "#A162F7",
          blue: "#2884FF",
          yellow: "#F6CC0D",
          red: "#FF6370",
          green: "#70CF97",
          orange: "#FF764C",
        },
        gray: {
          100: "#E0E4E7",
          200: "#A4A5A6",
          300: "#7C7C8D",
          400: "#72767C",
          500: "#5F6165",
          600: "#242731",
        },
      },
    },
  },
  plugins: [],
};
