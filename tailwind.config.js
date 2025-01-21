/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: "1025px",
        md: "770px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"]
      },
      colors: {
        gray: "#DBDBF3",
        lightGray: "#31374D1A",
        darkGray:"#CECECE",
        customBlack:"#14191C"
      }
    },
  },
  plugins: [],
}