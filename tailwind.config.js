/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'offside': ['Offside', 'sans-serif']
      },
      colors: {
        'foxus': '#F0F0F0',
        'spectrum': "#D6C8E1",
        'ph': "#54526D",
        'nav': "#11101C",
        'tpg': "#8456B7",
        'dmnav': "#B6DBF2"

      }
    },
  },
  plugins: [],
}