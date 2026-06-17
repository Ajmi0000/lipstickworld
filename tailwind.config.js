/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
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
        },
        rose: {
          400: '#fb7da8',
          500: '#f4628f',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at 20% 20%, rgba(216,180,254,0.55) 0%, rgba(255,255,255,0) 45%), radial-gradient(circle at 80% 30%, rgba(168,85,247,0.35) 0%, rgba(255,255,255,0) 50%), linear-gradient(135deg, #faf5ff 0%, #f3e8ff 50%, #ffffff 100%)',
        'animated-gradient':
          'linear-gradient(120deg, #f3e8ff 0%, #e9d5ff 25%, #fdf4ff 50%, #ede9fe 75%, #faf5ff 100%)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(147, 51, 234, 0.15)',
        glow: '0 0 40px rgba(192, 132, 252, 0.45)',
      },
      animation: {
        'gradient-move': 'gradientMove 12s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
      },
      keyframes: {
        gradientMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
}
