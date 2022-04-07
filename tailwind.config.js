const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        game: ["PressStart2P", ...fontFamily.mono],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
