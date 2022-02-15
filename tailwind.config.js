module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        vietnam: ["Be Vietnam Pro", "sans-serif"],
      },
      backgroundPosition: {
        "right-10": "40em -10em",
        "right-20": "-500px 300px",
        "top-10": "0em -10em",
      },
      backgroundImage: {
        "primary-300": "linear-gradient(#242d5200, #242d5273)",
      },
    },
    colors: {
      "primary-100": "hsl(12, 88%, 59%)",
      "primary-200": "hsl(228, 39%, 23%)",
      "neutral-100": "hsl(227, 12%, 61%)",
      "neutral-200": "hsl(233, 12%, 13%)",
      "neutral-300": "hsl(13, 100%, 96%)",
      "neutral-400": "hsl(0, 0%, 98%)",

      transparent: "transparent",
      white: "#ffffff",
    },
  },
  plugins: [],
};
