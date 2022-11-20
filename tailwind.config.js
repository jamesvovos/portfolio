/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        sourcecode: "sourcecode",
        drukwideweb: "drukwideweb",
      },
      colors: {
        customblue: {
          50: "#0099FF",
        },
      },
    },
  },
  plugins: [],
};
