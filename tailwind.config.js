/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      spacing: {
        "400": "400px",
        "500": "500px",
        "600": "600px",
        "700": "700px",
        "800": "800px",
        "1000": "1000px"
      },
      fontFamily: {
        lobster: ['Lobster', 'cursive']
      },
    },
  },
  plugins: [],
}