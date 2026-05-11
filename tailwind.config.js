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
        'background-4': 'var(--bg4)',
        foreground: 'var(--text)',
        primary: 'var(--accent)',
        muted: 'var(--muted)',
        border: 'var(--border)',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'Noto Sans Bengali', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Outfit', 'system-ui', 'sans-serif'],
        bengali: ['Noto Sans Bengali', 'sans-serif'],
      },
      borderRadius: {
        'card': '20px',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'spin-slow-reverse': 'spin 30s linear infinite reverse',
        'wa-pulse': 'waPulse 2s infinite',
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
        'load-bar': 'loadBar 1s infinite',
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 20s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'gradient': 'gradientShift 8s ease-in-out infinite',
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
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '50%': { transform: 'translate(-20px, 30px) scale(0.95)' },
          '75%': { transform: 'translate(20px, 20px) scale(1.02)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 40px rgba(124,255,107,0.15)' },
          '50%': { boxShadow: '0 0 60px rgba(124,255,107,0.25)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
