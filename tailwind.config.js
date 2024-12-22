/** @type {import('tailwindcss').Config} */
import withMU from "./src/utils/withMU";

module.exports = withMU({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  modernUI: {},
});
