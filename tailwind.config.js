/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/layouts/*.{handlebars,html,js}",
    "./views/*.{handlebars,html,js}",
  ],
  theme: {
    extend: {},
    colors: {
      OffWhite: "#FDFDFD",
      myrtleGreen: "#537D7F",
      ashGray: "#99B7B8",
      AliceBlue: "#D9E4E7",
      whiteSmoke: "#F7F6F3",
      ghostWhite: "#E6E7EF",
      red: "#F50000",
      darkRed: "#8F0000",
      OffBlack: "#0A100D",
      columbiaBlue: "#D0E5F0",
      green: "#05C78D",
      darkGreen: "#048B63",
      cambridge: "#648F90",
    },
  },
  plugins: [require("daisyui")],
};
