/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        nature : "url('/images/nature.png')",
        shows : 'url("/images/shows.png")',
        food : 'url("/images/food.png")',
        people : 'url("/images/people.png")',
      }
    },
  },
  plugins: [],
}
