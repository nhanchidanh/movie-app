/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'banner': 'url(https://movie-trailer1.vercel.app/banner.png)'
      }
    },
  },
  plugins: [],
}

