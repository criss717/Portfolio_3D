/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        ink: "#1d1d1f",
        graphite: "#707070",
        slate: "#474747",
        ash: "#333333",
        fog: "#f5f5f7",
        snow: "#ffffff",
        obsidian: "#000000",
        "silver-mist": "#e8e8ed",
        azure: "#0071e3",
        "cobalt-link": "#0066cc",
        
        // Dark mode variables mapping
        "dark-canvas": "#000000", // Obsidian
        "dark-card": "#1d1d1f", // Ink
        "dark-text": "#f5f5f7", // Fog
        "dark-text-secondary": "#a1a1a6",
      },
      fontFamily: {
        sans: ['"SF Pro Text"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        display: ['"SF Pro Display"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.022em',
        tighter: '-0.015em',
        tight: '-0.005em',
      },
      boxShadow: {
        none: "none",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "none",
      },
      borderRadius: {
        '3xl': '28px',
      }
    },
  },
  plugins: [],
};