/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(0,152,15,1) 22%, rgba(36,255,0,1) 100%)',
      }
    },
  },
  plugins: [],
}

