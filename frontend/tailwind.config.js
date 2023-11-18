/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    opacity: ['group-hover', 'hover']
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary' : '#6DCBFF'
      },
      fontFamily: {
        'heading' : 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
