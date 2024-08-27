/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "rgba(254, 238, 0, 1)",
        silver: "rgba(245, 245, 246, 1)",
      },
    },
  },
  plugins: [],
};
