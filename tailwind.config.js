/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bodycolor": "#cdbea3",
        "inner-div": "#0d0d0d",
        "orange": "#ff552f",
        "cards" : "#1c1b19",
        "card-text": "#cdbea3",
      },
    },
  },
  plugins: [],
}

