import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-cyan": "#04CDCD",
        "primary-white": "#FEFEFE",
      },
      screens: {
        "3xl": "1920px",
      },
    },
    fontWeight: {
      "extra-bold": "700",
    },
  },
  plugins: [],
};
export default config;
