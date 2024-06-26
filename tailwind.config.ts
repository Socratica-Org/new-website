import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#FBF8EF",
      },
      fontFamily: {
        tiempos: ["Tiempos Headline", "serif"],
        untitled: ["Untitled Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
