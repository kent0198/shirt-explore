/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", "Arial", "Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [

  ],
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./src/**/*.{js,ts,jsx,tsx}"
  ]
}

