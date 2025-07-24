import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#ede8f5",
        primary: "#8697c4",
        secondary: "#adbbda",
        textDark: "#2d2d2d",
        textMuted: "#555",
        cta: "#4e6bb9",
        ctaHover: "#3a4f8c",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
