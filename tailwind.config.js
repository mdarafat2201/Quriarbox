/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        navbarbgfrom: "#FFFFFF",
        navbarbgvia: " #FFE4D9",
        navbarbgto: "#FFEDC9",
        orangecolor: "#F95C19",
        navshadow: "rgba(0, 0, 0, 0.05);",
      },
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
