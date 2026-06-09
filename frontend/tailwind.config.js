/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#F7FAFC',
          surface: '#FFFFFF',
          'surface-soft': '#F0F7F7',
          primary: '#2F80A8',
          'primary-dark': '#1E5F7A',
          'primary-soft': '#E4F3F7',
          secondary: '#78BFA7',
          'secondary-soft': '#EAF7F2',
          'secondary-dark': '#4A9478',
          accent: '#AFA3E8',
          'accent-soft': '#F1EEFC',
          warning: '#D99A3D',
          'warning-soft': '#FFF4E3',
          'warning-dark': '#9B6A1A',
          danger: '#C75C5C',
          'danger-soft': '#FDECEC',
          'text-main': '#1F2933',
          'text-muted': '#64748B',
          border: '#E2E8F0',
        }
      }
    },
  },
  plugins: [],
};
