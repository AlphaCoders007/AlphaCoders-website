import type { Config } from "tailwindcss";
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, String(val)]) // Ensure all values are strings
  );

  addBase({
    ":root": {
      ...newVars,
      "--background-light": theme("colors.background.light"),
      "--foreground-light": theme("colors.foreground.light"),
      "--aurora":
        "repeating-linear-gradient(100deg, #3b82f6_10%, #8b5cf6_20%, #3b82f6_30%)",
    },
  });
}

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        thicccboi: ["Thicccboi", ...defaultTheme.fontFamily.sans],
        wide: ["Audiowide"],
        Orbitron: ["Orbitron"],
      },
      fontWeight: {
        light: "100",
        normal: "400",
        medium: "500",
        bold: "600",
      },
      animation: {
        circle: "moveCircle 10s linear infinite",
        aurora: "aurora 10s ease-in-out infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        aurora: {
          "0%, 100%": { backgroundPosition: "50% 50%" },
          "50%": { backgroundPosition: "60% 40%" },
        },
        moveCircle: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      colors: {
        background: {
          light: "#ffffff", // Ensure this is a string
        },
        foreground: {
          light: "#000000", // Ensure this is a string
        },
      },
    },
  },
  plugins: [addVariablesForColors],
} satisfies Config;