/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        dimgray: "#656d78",
        gray: {
          100: "#fafafa",
          200: "#888",
          300: "#111",
          400: "rgba(255, 255, 255, 0.5)",
        },
        royalblue: "#0068d1",
        oldlace: "#fff7e6",
        darkgray: "#aaa",
        darkslategray: "#444",
        gainsboro: "#ddd",
        whitesmoke: {
          100: "#f0f0f0",
          200: "#eee",
          300: "#f5f5f5",
        },
        black: "#000",
        indigo: "#660099",
        indianred: "#ed5564",
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        blue: colors.blue,
        red: colors.red,
        "my-blue": "#0068D1",
      },
      spacing: {},
      fontFamily: {
        "pc-h4": "NanumSquareOTF_ac",
        inherit: "inherit",
      },
      borderRadius: {
        "11xl": "30px",
        "91xl": "110px",
      },
    },
    fontSize: {
      base: "16px",
      "25xl": "44px",
      "11xl": "30px",
      mid: "17px",
      sm: "14px",
      xl: "20px",
      "5xl": "24px",
      "55xl": "74px",
      "15xl": "34px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
