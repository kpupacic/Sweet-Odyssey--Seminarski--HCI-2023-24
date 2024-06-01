import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        "roboto-condensed": ["var(--font-roboto-condensed)"],
        inter: ["var(--font-inter)"],
        playfair: ["var(--font-playfair)"],
      },
      colors: {
        transparent: 'transparent',
        'brown': '#a15c36',
        'beige': '#f4a259',
        'gold': '#eada8a',
        'yellow': '#eae5c6',
        'blue': '#8cbdc2',
        'green': '#8cb369',
      },
    },
  },
  plugins: [],
};
export default config;