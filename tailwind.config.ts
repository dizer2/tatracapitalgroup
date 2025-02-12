import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkS: "#333",
        mainS: "#080063"
      },
    },
    fontFamily: {
      bebas: ['BebasKai', 'sans-serif'],
      avenir: ['Avenir', 'sans-serif'], 
    }
  },
  plugins: [],
} satisfies Config;
