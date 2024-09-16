/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        "landing-top": "url('/public/img/bg-tablet-pattern.svg')",
      },
    },
  },
  plugins: [],
};
