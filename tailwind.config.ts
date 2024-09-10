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
        orange: "#FF6D24",
        "light-blue": "#BCD1F1",
        pink: "#F4B1CB",
        yellow: "#E9B34A",
      },
      colors: {
        "soft-grey": "#A09D98",
      },
      fontFamily: {
        tiempos: ["Tiempos Headline", "serif"],
        untitled: ["Untitled Sans", "sans-serif"],
        "dm-mono": ["DM Mono", "monospace"],
      },
      fontSize: {
        "vw-100": "100vw", // Adjust this based on your needs
      },
    },
  },
  plugins: [],
};
export default config;
