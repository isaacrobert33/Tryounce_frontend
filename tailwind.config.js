/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    extend: {
      colors: {
        green: "#10953B",
        "green-200": "#10953B",
        "green-300": "#0B6328",
        white: "#ffffff",
        grey: "#6F7376",
        "grey-100": "#858585",
        "grey-200": "#5E6164",
        black: "#000000",
        "black-800": "#1A1A1A",
      },

      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },

      fontWeight: {
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        gold: "900",
      },

      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.563rem", // 24px
        "3xl": "1.953rem", // 30px
        "4xl": "2.441rem", // 36px
        "5xl": "3.052rem", // 48px
      },

      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".1em",
        "widest-n": ".25em",
      },
    },
  },
  plugins: [],
};
