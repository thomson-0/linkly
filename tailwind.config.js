/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  purge: {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: ['dark:bg-black', 'dark:text-white'],
  },
};
