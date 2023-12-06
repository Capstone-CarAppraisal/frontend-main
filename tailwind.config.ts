import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    colors: {
      "dark-blue": "#112D4E",
      "light-blue": "#DBE2EF",
      blue: "#3F72AF",
      rose: "#ED5656",
      grey: "#7D7D7D",
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans)"],
        worksans: ["var(--font-work-sans)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("preline/plugin"), require("@tailwindcss/forms")],
};
export default config;
