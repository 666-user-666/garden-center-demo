/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#16a34a',
        'primary-dark': '#15803d',
        green: {
          600: '#16a34a',
          700: '#15803d',
        },
        secondary: {
          DEFAULT: '#f7fafc',
        },
        text: {
          DEFAULT: '#1a202c',
          light: '#4a5568',
        },
      },
      animationDelay: {
        100: '100ms',
        200: '200ms',
        300: '300ms',
        400: '400ms',
        500: '500ms',
        600: '600ms',
      },
    },
  },
  plugins: [],
};