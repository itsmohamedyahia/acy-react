/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {  
    extend: {},
    screens: {
      // => @media (max-width: 1535px) { ... }
      'mob': {'max': '1535px'},
      'tab': {'max': '1150px'},
      'lap': {'max': '1535px'},
      'lap': {'max': '1535px'},
      'monit': {'max': '1535px'},
     
    }
},
  plugins: []
};
