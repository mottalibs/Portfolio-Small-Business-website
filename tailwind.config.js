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
        'primary-2': 'var(--accent-2)',
        muted: 'var(--muted)',
        border: 'var(--border)',
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        'card': '16px',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
        'load-bar': 'loadBar 1s infinite',
        'marquee': 'marquee 40s linear infinite',
        'float': 'float 20s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'gradient': 'gradientFlow 6s ease-in-out infinite',
        'dot-pulse': 'dotPulse 2s ease-in-out infinite',
        'scroll-wheel': 'scrollWheel 2s ease-in-out infinite',
      },
      keyframes: {
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
          '0%, 100%': { boxShadow: '0 0 40px rgba(255,204,0,0.06)' },
          '50%': { boxShadow: '0 0 60px rgba(255,204,0,0.12)' },
        },
        gradientFlow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        dotPulse: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(255, 204, 0, 0.4)' },
          '50%': { opacity: '0.6', boxShadow: '0 0 0 6px rgba(255, 204, 0, 0)' },
        },
        scrollWheel: {
          '0%': { transform: 'translateX(-50%) translateY(0)', opacity: '1' },
          '100%': { transform: 'translateX(-50%) translateY(12px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
