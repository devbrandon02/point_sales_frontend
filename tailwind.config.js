/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["cupcake","light", "dark"],
  },
  plugins: [
    require('daisyui'),
  ],
}

