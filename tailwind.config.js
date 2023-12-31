/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#090909",
        secondary: "#AB885D",
        muted: "rgb(161 161 170)"
      },
      screens: {
        "3xl": "4000px",
      },
    },
  },
  plugins: [],
};
