/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver': '#f5f7fa',
        'neutralDGrey': '#4d4d4d',
        'brandDark' : '#3d8c3f',
        'brandPrimary': '#4caf4f',
        'brandLight': '#70bf72',
        'neutralGrey': '#717171',
        'gray900': '#18191f'
      },
      fontSize: {
        '2vw': '2vw'
      },
      height: {
        'heightCurveBlock': 'calc(100vh + 200px)', 
      },
      screens: {
        'xs': '320px'
      }
    },
    
  },
  plugins: [require('flowbite/plugin')],
}

