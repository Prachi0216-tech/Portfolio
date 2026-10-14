/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        primary: {
          DEFAULT: '#9333ea',
          dark: '#7e22ce',
          light: '#a855f7',
          glow: '#c084fc'
        },
        accent: {
          cyan: '#06b6d4',
          blue: '#3b82f6',
          violet: '#8b5cf6',
          fuchsia: '#d946ef'
        },
        dark: {
          bg: '#0a0612',
          surface: '#120d22',
          card: '#18122e',
          border: 'rgba(168, 85, 247, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(168, 85, 247, 0.3)' },
          '100%': { boxShadow: '0 0 35px rgba(168, 85, 247, 0.7)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.15) 0%, rgba(10, 6, 18, 0) 70%)',
      }
    },
  },
  plugins: [],
}
