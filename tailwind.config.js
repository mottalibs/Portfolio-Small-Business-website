/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--bg)',
        'background-2': 'var(--bg2)',
        'background-3': 'var(--bg3)',
        foreground: 'var(--text)',
        primary: 'var(--accent)',
        muted: 'var(--muted)',
        border: 'var(--border)',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Bengali', 'system-ui', 'sans-serif'],
        bengali: ['Noto Sans Bengali', 'sans-serif'],
      },
      borderRadius: {
        'card': '14px',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'spin-slow-reverse': 'spin 30s linear infinite reverse',
        'wa-pulse': 'waPulse 2s infinite',
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
        'load-bar': 'loadBar 1s infinite',
      },
      keyframes: {
        waPulse: {
          '0%, 100%': { boxShadow: '0 4px 20px rgba(37,211,102,.4)' },
          '50%': { boxShadow: '0 4px 35px rgba(37,211,102,.6)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'none' },
        },
        loadBar: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
