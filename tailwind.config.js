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
          carrot: "#FFE0BA",
        },
        secondary: {
          purple: "#A66FF0",
          blue: "#2884FF",
          yellow: "#F6CC0D",
          red: "#FF6370",
          green: "#70CF97",
          orange: "#FF764C",
        },
        gray: {
          white: "#E0E4E7",
          dark6: "#A4A5A6",
          dark4: "#7C7C8D",
          dark3: "#72767C",
          dark2: "#5F6165",
          dark1: "#242731",
          dark: "#1F2128",
        },
      },
      borderRadius: {
        xl: "14px",
      },
      height: {
        90: "90%",
      },
    },
  },
  plugins: [],
};
