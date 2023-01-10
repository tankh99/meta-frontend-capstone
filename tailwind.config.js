/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#495e57",
        primaryAccent: "#33423d",
        primaryAlt: "#f4ce14",
        primaryAltAccent: "#d4b20f"
      }
    },
  },
  plugins: [],
}
