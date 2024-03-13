/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#202F28',
        blue:{
          dark: '#35374B'
        },
        green: {
          default: '#344955',
          light: '#405B62',
          lighter: '#50727B'
        },
        orange: {
          default: '#EC861B',
          light: '#ffc170'
        }
      }
    }
  },
  plugins: [],
}
