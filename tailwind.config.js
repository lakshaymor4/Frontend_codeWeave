/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pur: "#5E5DF0",
        dpur: "#4D3C77",
        ppur:"#6968F7"
      },
      fontSize: {
        "5.5xl": "3.5rem",
      },
    },
  },
  plugins: [],
};
