/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      boxShadow:{
        'myshadow':' rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        '4xl': 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px'
      }
    },
    colors:{
      transparent:'transparent',
      white:'#FFFFFF',
      blue:'#3b82f6',
      grey:'#9333ea',
      oqroq:'#f8fafc',
      kokroq:'#f0f9ff',
      gradentGray:'linear-gradient(0deg, rgba(154,58,241,1) 24%, rgba(187,139,231,1) 68%);',

    },
  },
  plugins: [],
}
