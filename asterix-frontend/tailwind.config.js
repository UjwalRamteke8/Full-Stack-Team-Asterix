module.exports = {
  important: true, // This adds !important to all Tailwind styles
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    animation: {
      spin: "spin 2s linear infinite",
    },
  },
  plugins: [],
};
