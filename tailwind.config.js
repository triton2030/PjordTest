/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#140935",
        border: "#190f41",
        text: "#d9ddff",
        surfaceaccent: "#3e29a2",
        surfaceinput: "rgba(0, 0, 0, 0.2)",
      },
      spacing: {
        iconsize: "24px",
        xxs: "2px",
      },
      fontFamily: {
        "medium-base": "'Space Grotesk'",
      },
      borderRadius: {
        "13xl": "32px",
        "big-blocks": "32px",
      },
    },
    fontSize: {
      base: "1rem",
      xs: "0.75rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};