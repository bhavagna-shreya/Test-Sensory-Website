/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'blue-100': '#E6F3FF',
        'blue-200': '#CCE7FF',
        'blue-300': '#99CFFF',
      },
      animation: {
        'swim': 'swim 15s linear infinite',
        'wave': 'wave 3s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};