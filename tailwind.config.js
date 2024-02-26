/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Quicksand", "sans-serif"],
        secondary: ["Lato", "sans-serif"],
      },
      colors: {
        primary: "#3BB77E",
        secondary: "#7e7e7e",
        tertiary: "#253D4E",
        reddish: "#F9004D"
      },
    },
  },
  plugins: [require("daisyui")],
};
