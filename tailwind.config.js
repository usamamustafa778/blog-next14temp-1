/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        latestNews: "1fr 1fr 0.6fr",
        blog: "1fr 0.5fr",
        pos: "1fr 500px",
      },
    },
  },
  plugins: [],
};
