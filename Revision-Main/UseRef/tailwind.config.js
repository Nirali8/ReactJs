/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slideLToR: "slideLToR 2s ease-in-out",
        slideRToL: "slideRToL 2s ease-in-out",
      },
      keyframes: {
        slideLToR: {
          "0%": { transform: "translate(1000px)" },
        },
        slideRToL: {
          "0%": { transform: "translate(-1000px)" },
        },
      },
    },
  },
  plugins: [],
};
