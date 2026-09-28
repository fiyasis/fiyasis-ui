/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0A66C2",
          dark: "#084d94",
        },
      },
    },
  },
  plugins: [],
};
