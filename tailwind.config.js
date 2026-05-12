export default {
  content: [
    "./index.html",
    "./main.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#0a0a0a',
        surface: 'rgba(15, 15, 20, 0.6)',
        surfaceBorder: 'rgba(255, 255, 255, 0.08)',
        primary: '#8b5cf6', // Violet-500
        secondary: '#ec4899', // Pink-500
        accent: '#06b6d4', // Cyan-500
      }
    },
  },
  plugins: [],
}
