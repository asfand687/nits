import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulseGrow: {
          '0%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.5' },
          '100%': { transform: 'translate(-50%, -50%) scale(1.5)', opacity: '0' },
        },
      },
      animation: {
        pulseGrow: 'pulseGrow 1.5s ease-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
