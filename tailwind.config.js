/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#0F1827",
          200: "#192131",
        },
        secondary: {
          100: "#CB144A",
        },
        accent: {
          100: "#E2EE55",
        },
      },
    },
  },
  
  plugins: [],
};
