/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF7A00',
          'orange-dark': '#E65D00',
          'orange-light': '#FFF5EB',
          green: '#1F8E3D',
          'green-light': '#EBF8EE',
          dark: '#121417',
          gray: '#5C6370',
          light: '#F8F9FA',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0, 0, 0, 0.05)',
        card: '0 4px 20px rgba(0, 0, 0, 0.08)',
        elevated: '0 20px 40px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
