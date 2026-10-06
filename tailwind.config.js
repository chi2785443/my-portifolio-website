/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#b5546e',
          dim: '#8f3d56',
          glow: 'rgba(181,84,110,0.15)',
        },
        surface: {
          base: '#080808',
          raised: '#0f0f0f',
          card: '#141414',
        },
      },
      borderColor: {
        subtle: 'rgba(255,255,255,0.07)',
        accent: 'rgba(181,84,110,0.25)',
      },
    },
  },
  plugins: [],
};
