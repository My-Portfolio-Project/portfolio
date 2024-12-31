/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        proza: ["Proza_light", "Arial", "Helvetica", "sans-serif"], 
        playfair: [ "Playfair Display", "serif"]
      },
    },
  },
  plugins: [],
};
