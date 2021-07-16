module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        45: "45rem",
      },
      height: {
        17: "4.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
