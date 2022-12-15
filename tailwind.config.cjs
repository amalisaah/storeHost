/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgBluefeint': '#59AFFF',
        'bgGray': '#F7F7F7',
        'bgWhite': '#FFF',
        'fontGray': '#484848',
        'fontGrayW': '#AAA',
        'bgBlue': '#0085FF',
        'white': '#FFF',
        'bdGreen': 'green',
        'error': '#FF3131',
        'hoverBlue': '#59AFFF',
        'darkBlue': '#00284C',
      },
      fontFamily: {
        'fontRoboto':['Roboto','Helvetica', 'Arial', 'sans-serif'],
        'fontPoppins':[ 'Poppins','Helvetica','Sans-serif'],
      },
    },
  },
  plugins: [],
}
