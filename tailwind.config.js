/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Make Work Sans the default sans-serif font
        inter: ["Inter", "sans-serif"],
        "noto-arabic": ["Noto Sans Arabic", "sans-serif"],
      },
      colors: {
        Button: "#DB4444",
        hover: "#E07575",
        para: "#898989",
        stars: "#FFAD33",
      },
      padding: {
        "1/3": "33.333333%",
        "2/3": "66.666667%",
      },
    },
  },
  plugins: [],
};
