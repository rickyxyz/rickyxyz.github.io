/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        18: "4.6rem",
      },
      colors: {
        almost_black: "#232527ff",
        darker_black: "#2e2f31ff",
        dark_black: "#4e5052ff",
        almost_white: "#fafafaff",
        orange: "#ff9900ff",
        dark_orange: "#e35000ff",
      },
      fontFamily: {
        jakarta: ["'Plus Jakarta Sans'", "sans-serif"],
        bebas: ["'Bebas Neue'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
