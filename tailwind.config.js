/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: 'hsl(0, 0%, 100%)',
      stone: {
        100: 'hsl(30, 54%, 90%)',
        150: 'hsl(30, 18%, 87%)',
        600: 'hsl(30, 10%, 34%)',
        900: 'hsl(24, 5%, 18%)',
      },
      brown: {
        800: 'hsl(14, 45%, 36%)',
      },
      rose: {
        50: 'hsl(330, 100%, 98%)',
        800: 'hsl(332, 51%, 32%)',
      },
    },
    extend: {
      fontFamily: {
        YoungSerif: '"Young Serif", serif',
        Outfit: '"Outfit", sans-serif',
      },
    },
  },
  plugins: [],
};
