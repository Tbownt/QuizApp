/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        fondo: "url('./assets/images/background.png')",
      },
    },
    colors: {
      title: "#1D355D",
      white: "#F1F1F1",
      green: "#6FCF97",
      yellow: "#F9A826",
    },
  },
  plugins: [],
};
