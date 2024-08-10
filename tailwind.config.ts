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
      boxShadow: {
        'btn': '0px 9px 20px -5px rgba(233, 76, 84, 0.57) ',
        'card': '0px 4px 25px rgba(38, 78, 118, 0.1)'
      }
    },
  },
  plugins: [],
};
export default config;
