/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      lineHeight: {
        relaxed: 1.6
      },
      width: {
        26: '6.75rem',
        58: '14.5rem',
        81: '20.25rem',
        88: '23.25rem'
      },
      height: {
        18: '4.5rem',
        41: '10.25rem',
        62: '15.125rem',
        menu: 'calc(100vh - 2rem)'
      },
      padding: {
        18: '4.5rem'
      },
      borderRadius: {
        sm: '0.25rem',
        '2lg': '0.625rem'
      },
      gap: {
        16: '4rem',
        33: '8.125rem'
      }
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      overlay: '#000000a6',
      transparent: 'transparent',

      green: {
        50: '#7FD1CC',
        100: '#50B2C0',
        200: '#255D6A',
        300: '#0A313C'
      },

      purple: {
        50: '#9694F5',
        100: '#8381D9',
        200: '#2A2879'
      },

      gray: {
        100: '#F8F9FC',
        200: '#E6E8F2',
        300: '#D1D6E4',
        400: '#8D95AF',
        500: '#303F73',
        600: '#252D4A',
        700: '#181C2A',
        800: '#0E1116'
      }
    },
    fontFamily: {
      sans: ['Nunito', 'sans-serif']
    }
  },
  plugins: []
};
