/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Roboto Slab'],
        paragraph: ['Noto Sans KR'],
      },
      colors: {
        primary: '#000',
        secondary: '#197684',
      },
    },
  },
  plugins: [],
}
