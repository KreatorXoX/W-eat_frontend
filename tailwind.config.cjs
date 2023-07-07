/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 25%": { transform: "rotate(-180deg)" },
          "25%, 50%": { transform: "rotate(30deg)" },
          "50%, 75%": { transform: "rotate(-30deg)" },
          "75%, 100%": { transform: "rotate(30deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
