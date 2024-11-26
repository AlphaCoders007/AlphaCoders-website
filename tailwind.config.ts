import type { Config } from "tailwindcss";
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": {
      ...newVars,
      "--background-light": theme('colors.background.light'),  // White for light mode background
      "--foreground-light": theme('colors.foreground.light'),  // Black text in light mode
      "--background-dark": theme('colors.background.dark'),    // Dark background for dark mode
      "--foreground-dark": theme('colors.foreground.dark'),     // White text for dark mode
    },
  });
}

export default {
  darkMode: "class",  // Class-based dark mode toggling
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
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
          light: "#ffffff",  // Explicitly white background for light mode
          dark: "#000000",   // Pure black background for dark mode (you can change this)
        },
        foreground: {
          light: "#000000",  // Black text for light mode
          dark: "#ffffff",   // White text for dark mode
        },
      },
    },
  },
  plugins: [addVariablesForColors],
} satisfies Config;
