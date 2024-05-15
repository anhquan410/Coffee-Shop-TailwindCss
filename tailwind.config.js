/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
      colors: {
        "light-coffee": "#C89F94",
      },
      keyframes: {
        slideDown: {
          "100%": { transform: "translateY(0)" },
          "0%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        slideDown: "slideDown .4s ease-in-out",
      },
    },
  },
  plugins: [],
};
