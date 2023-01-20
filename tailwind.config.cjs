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
        'lnkColorB': '#15616B',
        'bgColorB': '#4F4F4F',
        'black' : '#222',
        'sideHover' : '#59afff33',
        'orange' : '#FC7225',
        'blur' : '#222222cc'
        
      },
      fontFamily: {
        'fontRoboto':['Roboto','Helvetica', 'Arial', 'sans-serif'],
        'fontPoppins':[ 'Poppins','Helvetica','Sans-serif'],
        'fontOutfit':[ 'Outfit','Helvetica','Sans-serif'],
      },
      boxShadow: {
        '1': '0px 2px 8px -2px rgba(0, 0, 0, 0.25)',
        '2': '0px 2px 10px -2px rgba(0, 0, 0, 0.25);'
      },
      keyframes: {
        keyframes: {
          fadeOut: {
            '0%': {
            opacity: 0
            },
            '100%': {
            opacity: 1
            }
          }
        }
      },
      animation: {
        fadeOut: 'fadeOut 1s ease-in-out',
      }
      
    },
  },
  plugins: [],
}
