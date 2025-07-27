const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8fafc",
        foreground: "#1e293b",
        accent: "#fbbf24",
        muted: "#cbd5e1",
      },
      fontFamily: {
        sans: ["'Open Sans'", ...defaultTheme.fontFamily.sans],
        poppins: ["'Poppins'", ...defaultTheme.fontFamily.sans],
        lemon: ["'LemonMilk'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
