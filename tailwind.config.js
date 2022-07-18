/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        vt323: "'VT323', monospace",
        start2p: "'Press Start 2P', cursive",
      }
    },
  },
  plugins: [],
}
