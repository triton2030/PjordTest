/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ui-primary-surface": "#140935",
        "ui-primary-border": "#190f41",
        "ui-txt-primary": "#d9ddff",
        "ui-accent-surface": "#3e29a2",
        "ui-empty-surface": "#2c1a7f",
        "ui-btn-primary-stroke": "#281e5a",
        "ui-txt-secondary": "#8993f8",
        "ui-btn-secondary-tokenselection": "#6774f6",
      },
      spacing: {
        iconsize: "16px",
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
      base: "16px",
      xs: "12px",
      sm: "14px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};