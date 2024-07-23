/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        "primary-font": ["'Island-moments'", "sans-serif"],
        "title-font": ["MedievalSharp", "sans-serif"],
        "card-font": ["'Kaushan Script'", "sans-serif"],
      },
      colors: {
        "bg-primary": "rgb(246,238,208)",
        "bg-secondary": "rgb(67,104,125)",
        "bg-card": "rgb(123,148,190)",
        "nav-text-color": "rgb(20,67,177)",
        "nav-text-color-selected": "rgb(50,183,19)",
        "border-input-color": "rgb(188,181,103)",
        "bg-input-color": "rgb(208,208,208)",
        "bg-cancel-btn": "rgb(156,209,108)",
        "bg-save-btn": "rgb(237,207,98)",
        "bg-del-btn": "rgb(204,105,108)",
      },
    },
  },
  plugins: [],
};
