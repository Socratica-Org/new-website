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
        "primary": "#FBF8EF",
      },
      colors: {
        "soft-grey": "#A09D98",
      },
      fontFamily: {
        tiempos: ["Tiempos Headline", "serif"],
        untitled: ["Untitled Sans", "sans-serif"],
        "dm-mono": ["DM Mono", "monospace"]
      },
    },
  },
  plugins: [],
};
export default config;
