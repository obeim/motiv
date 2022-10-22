/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      dm: "DM Sans, sans-serif",
      effra: "Effra Regular",
      poppins: "Poppins",
    },
    extend: {
      colors: {
        primary: {
          dark: "#242731",
          white: "#E0E4E7",
          purple: "#A162F7",
          carrot: "#FFE0BA",
          Tangaroa: "#0F2837",
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
        carrot: {
          50: "#FFE0BA",
          100: "#FF9619",
        },
        pompadour: {
          100: "#6E1946",
        },
        romantic: {
          100: "#FAC39B",
        },
        tertiary: {
          1: "#E1DFA4",
          2: "#E3ECF1",
        },
      },
      borderRadius: {
        xl: "14px",
      },
      height: {
        90: "90%",
      },
      width: {
        "6/10": "60%",
        "55/10": "55%",
      },
    },
  },
  plugins: [],
};
