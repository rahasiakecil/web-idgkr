/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'base-first': '#5eead4',
        'base-second': '#d4d4d8',
        'base-third': '#ccfbf1',
      },
    },
  },
  plugins: [],
}
