/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    patterns: {
      opacity: {
          100: "1",
          80: ".80",
          60: ".60",
          40: ".40",
          20: ".20",
          10: ".10",
          5: ".05",
      },
      size: {
          1: "0.25rem",
          2: "0.5rem",
          4: "1rem",
          6: "1.5rem",
          8: "2rem",
          16: "4rem",
          20: "5rem",
          24: "6rem",
          32: "8rem",
      }
  },
    extend: {
      backgroundImage: {
        nature : "url('/images/nature.png')",
        shows : 'url("/images/shows.png")',
        food : 'url("/images/food.png")',
        people : 'url("/images/people.png")',
        nature2 : 'url("/phone/nature2.png")',
        individuals : 'url("/phone/individuals.png")',
        mealsnsips : 'url("/phone/mealsnsips.png")',
        concerts : 'url("/phone/concerts.png")',
      }
    },
  },
  plugins: [
    require('tailwindcss-bg-patterns'),
    require('tailwind-scrollbar'),
  ],
}
