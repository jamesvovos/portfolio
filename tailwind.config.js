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
        poppins: "poppins",
        poppinsbold: "poppins-bold",
      },
      colors: {
        customblue: {
          50: "#0062FD",
          100: "#148CFA",
          150: "#051A30",
          200: "#00EAFF",
          250: "#0099ff",
        },
        hintedwhite: {
          50: "#F3F2ED",
        },
        charcoal: {
          50: "#13161B",
          100: "#111111",
        },
      },
    },
  },
  plugins: [],
};
