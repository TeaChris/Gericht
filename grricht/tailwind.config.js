/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cor: 'Cormorant Upright',
        dan: 'Dancing Script',
      },
      colors: {
        colorPrimary: '#dcca87',
        colorBlack: ' #0c0c0c',
        colorGray: '#272727',
        colorLight: '#fafafa',
      },
      backgroundImage: {
        background: "url('./src/assets/footer.jpg')",
      },
    },
  },
  plugins: [],
}
