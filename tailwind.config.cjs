/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#ecfeff',
          100: '#cffafe',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490'
        }
      },
      boxShadow: {
        glass: '0 18px 45px rgba(15,23,42,0.65)'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
};
