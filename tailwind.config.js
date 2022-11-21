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
          100: "#148CFA",
          150: "#051A30",
          200: "#00EAFF",
        },
        hintedwhite: {
          50: "#F3F2ED",
        },
        charcoal: {
          50: "#13161B",
        },
      },
    },
  },
  plugins: [],
};
