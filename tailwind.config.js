const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "ui-sans-serif", "system-ui"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular"]
      },
      colors: {
        skillSection: "#F7F7FB"
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }){
      const utilities = {
        ".bg-hero": {
          "background-image": "url(../public/hero.png)",
          "background-size": "100%",
          "background-position": "bottom"
        },
        ".shadow-card": {
          "box-shadow": "0px 15px 30px rgba(0, 0, 0, 0.1)"
        }
      };
      addUtilities(utilities)
    }) 
  ]
}
