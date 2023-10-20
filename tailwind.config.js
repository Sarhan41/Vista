/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
        primary: {
          light: "#C9C9C9",
          DEFAULT: "#888888", // Default gray
          dark: "#333333", // Dark gray
        },
        text: {
          DEFAULT: "#222222", // Blackish text
          gray: "#888888", // Grayish text
        },
        white: "#FFFFFF", 
        
      },
      fontFamily: {
        robotoc: ["Roboto Condensed", "sans"],
        roboto: ["Roboto", "sans"],
        young: ["Young Serif", "serif"],
      },
      fontWeight: {
        'young': 'normal', // Set the font weight to normal
      },
    },
  },
  plugins: [],
};
