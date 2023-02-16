/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "bg-green" : "#00ff02"
      },
      fontFamily: {
        "source-code-pro": ["Source Code Pro", "monospace"],
        "etherean-sans": ["Etherean Sans"],
        "anton-regular": ["Anton", "sans-serif"]
      }
    },
  },
  plugins: [],
}