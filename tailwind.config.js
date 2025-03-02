/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url(./src/assets/images/bg-2.jpg)',
      },
    },
  },
  plugins: [require('daisyui')],
};
