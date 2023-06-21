/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif', 'poppins'],
        'poppins': ['Poppins'],
        'montserrat': ['Montserrat']
      }
    },
  },
  plugins: [],
};
