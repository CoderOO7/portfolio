// tailwind.config.js
const colors = require('tailwindcss/colors');
module.exports = {
  purge: ["./src/**/*.js", "./dist/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        6: "6px",
      },
      colors: {
        ...colors,
        cyan: colors.cyan,
        emerald: colors.emerald,
        lochmara: '#007acc',
        'eastern-blue': '#2298BD',
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "12%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" } /*Reset for last half to pause*/,
          "100%": { transform: "rotate(0deg)" },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        wave: "wave 2s ease-in-out infinite",
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
    },
  },
  variants: {},
  plugins: [],
};
