import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {},
    screens: {
      // => @media (max-width: 1535px) { ... }
      // 'mob': {'max': '500px'},
      // 'tab': {'max': '1150px'},
      // 'lap': {'max': '1261px'},
      // 'lap-xl': {'max': '1535px'},
      // 'mon': {'max': '1535px'},
      // 'mon-xl': {'max': '1535px'},
      "3xl": "1536px",
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" }
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: []
};
export default config;
