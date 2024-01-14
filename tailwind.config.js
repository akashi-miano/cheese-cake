/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6F4436",
        secondary: "#FFF8E1",
        accent: "#FCAE36",
        textClr: "#523728",
        cardClr: "#555555",
      },
    },
  },
  plugins: [],
};
