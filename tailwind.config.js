/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          25: "#f4ebf6",
          50: "#ebdaee",
          100: "#e1c9e7",
          200: "#cfa7d8",
          300: "#bd85c9",
          400: "#ab63ba",
          500: "#9448a4",
          600: "#753982",
          700: "#562a60",
          800: "#381b3e",
          900: "#190c1c",
        },
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
