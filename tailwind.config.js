/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fdcc01",
          secondary: "#833337",
          neutral: "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
