const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFDF2B",
        navBg: "rgba(222, 205, 65, 0.37)",
        secondary: colors.red[500],
        backdrop: "rgba(160, 159, 110, 0.2)"
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(6, 26.4rem))',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      }
    },
  },
  plugins: [],
};
