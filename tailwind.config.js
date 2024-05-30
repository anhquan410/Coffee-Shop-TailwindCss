/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
      colors: {
        coffee: {
          50: "#E8D6D0",
          200: "#C89F94",
          400: "#A25F4B",
          600: "#774438",
        },
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
      backgroundImage: {
        "slider-bg": 'url("./imgs/slider/slider-bg.jpg")',
      },
    },
  },
  plugins: [],
};
