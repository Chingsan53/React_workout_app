/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bigelow-rules': ['"Bigelow Rules"', 'cursive'],
      },
    },
  },
  plugins: [],
}
