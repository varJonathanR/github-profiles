/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "dark": "#111729",
      "purple": "#1D1B48",
      "light-blue": "#3662E3",
      "dark-gray": "#20293A",
      "mid-gray": "#364153",
      "gray": "#4A5567",
      "font-color": "#CDD5E0" 
    }
  },
  plugins: [],
}

