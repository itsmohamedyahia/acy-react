/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {  
    fontSize: {
      sm: '1.25rem',
      base: '1.575rem',
      lg: '1.953rem',
      xl: '2.441rem',
      '2xl': '3rem',
      '3xl': '3.8rem',
      '4xl': '4.768rem',
      '5xl': '5.96rem',
    },
    extend: {}, 
  },
  plugins: []
};
