/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui"],
      },
      colors: {
        professional: {
          black: "#0a0a0a",
          darkgrey: "#1a1a1a",
          grey: "#2a2a2a",
          midgrey: "#4a4a4a",
          lightgrey: "#6a6a6a",
          silver: "#9a9a9a",
          offwhite: "#e5e5e5",
          white: "#ffffff",
          yellow: "#fbbf24",
          darkyellow: "#f59e0b",
          paleyelow: "#fde68a",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
