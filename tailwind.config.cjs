/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile": "url(/src/assets/images/image-hero-mobile.jpg)",
        "hero-desktop": "url(/src/assets/images/image-hero-desktop.jpg)",
      },
      fontFamily: {
        commissioner: ["Commissioner", "sans-serif"],
      },
      colors: {
        crowd: {
          moderateCyan: "hsl(176, 50%, 47%)",
          darkCyan: "hsl(176, 72%, 28%)",
          darkGray: "hsl(0, 0%, 48%)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
