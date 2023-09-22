/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#4D77FF',
        'secondary': {
          100: '#fff',
          200: '#C7C9D9'
        }
      },
      }
    
  },
  plugins: [],
}