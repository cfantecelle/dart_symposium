/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_layouts/**/*.html",
    "./_includes/**/*.html",
    "./*.md",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Background
        background: "#FFF4F1",

        // Structure
        dark: "#3B1F4B",
        purple: "#9B58B6",

        // Primary Actions
        primary: "#F9655B",      // main CTA
        primarySoft: "#FF7F6A",  // hover / secondary CTA
        primaryLight: "#FF9A76", // decorative / subtle blocks

        // Accent
        accent: "#F54D82",
      },
    },
  },
  plugins: [],
};