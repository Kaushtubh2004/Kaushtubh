/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0A0908',
        raised: '#141210',
        raised2: '#1B1815',
        ink: '#EDEAE4',
        inkmuted: '#8B8680',
        inkfaint: '#5C5852',
        gold: '#B08D2E',
        goldbright: '#D9B24C',
        hairline: 'rgba(237,234,228,0.09)',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
