/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        coral: {
          50: "#fef4f1",
          100: "#fde7e1",
          400: "#f0876a",
          500: "#e8735a",
          600: "#d95f3f",
        },
        ink: {
          900: "#1c1a1a",
          800: "#26221f",
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
}
