/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'foxus': '#11101C',
        'spectrum': "#E2EDFE",
        'ph': "#54526D"
      }
    },
  },
  plugins: [],
}