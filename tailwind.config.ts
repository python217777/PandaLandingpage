import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "sans-serif"],
      },
      colors: {
        darkBg: "#050014",
        panel: "#0b061a",
        neonPink: "#ff3dfc",
        neonBlue: "#5cf4ff",
      },
    },
  },
  plugins: [],
};

export default config;
