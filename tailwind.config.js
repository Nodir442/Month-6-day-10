/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(39, 76, 91, 1)",
        secondary: "rgba(126, 182, 147, 1)",
        darkYellow: "#EFD372",
        darkSilver: "#525C60",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
        },
        screens: {
          lg: "1440px",
        },
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        yellowtail: ["Yellowtail", "cursive"],
      },
    },
  },
  plugins: [],
};
