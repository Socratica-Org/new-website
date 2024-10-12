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
        "off-black": "#131313",
      },
      colors: {
        "soft-grey": "#A09D98",
        primary: "#FBF8EF",
      },
      fontFamily: {
        tiempos: ["Tiempos Headline", "serif"],
        "tiempos-light": ["Tiempos Headline Light", "serif"],
        untitled: ["Untitled Sans", "sans-serif"],
        "dm-mono": ["DM Mono", "monospace"],
        "inter-variable": ["Inter Variable", "sans-serif"],
      },
      fontSize: {
        "vw-100": "100vw",
      },
      lineHeight: {
        "leading-tight": "1.25",
      },
    },
  },
  plugins: [],
};
export default config;
