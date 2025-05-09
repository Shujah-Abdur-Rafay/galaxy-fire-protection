/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D22730', // Firefighter red
          hover: '#B31B23',
        },
        secondary: {
          DEFAULT: '#e2e8f0', // Keeping light gray
          hover: '#cbd5e1',
        },
        accent: {
          DEFAULT: '#FFB600', // Fire yellow/amber
          hover: '#E59E00',
        },
        light: '#f8fafc',
        dark: {
          DEFAULT: '#1e293b',
          900: '#121826', // Added dark-900 color
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-custom': {
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f5f9',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#94a3b8',
            borderRadius: '20px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#64748b',
          },
        }
      }
      addUtilities(newUtilities)
    }
  ],
} 