/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
        },
        background: '#F8FAFC',
        card: '#FFFFFF',
        'text-main': '#1E293B',
        'text-muted': '#64748B',
        border: '#E2E8F0',
        success: '#22C55E',
        warning: '#EAB308',
        error: '#EF4444',
      },
      borderRadius: {
        'card': '16px',
        'button': '12px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};
