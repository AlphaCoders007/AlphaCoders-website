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
        Montserrat: ["Montserrat", "sans-serif"],
        Orbitron: ["Orbitron"],
      },

      fontWeight: {
        ultrathin: "20",
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900"
      },
      fontSize: {
        'xs': ['0.75rem', '1rem'],       // 12px, line-height 16px
        'sm': ['0.875rem', '1.25rem'],    // 14px, line-height 20px
        'base': ['1rem', '1.5rem'],       // 16px, line-height 24px
        'lg': ['1.125rem', '1.75rem'],    // 18px, line-height 28px
        'xl': ['1.25rem', '1.75rem'],     // 20px, line-height 28px
        '2xl': ['1.5rem', '2rem'],        // 24px, line-height 32px
        '3xl': ['1.875rem', '2.25rem'],   // 30px, line-height 36px
        '4xl': ['2.25rem', '2.5rem'],     // 36px, line-height 40px
        '5xl': ['3rem', '1'],             // 48px, line-height 1
        '6xl': ['3.75rem', '1'],          // 60px, line-height 1
        '7xl': ['clamp(1.56rem,.468rem + 4.48vw,4.5rem)', '5rem'],           // 72px, line-height 1
        '8xl': ['6rem', '1'],             // 96px, line-height 1
        '9xl': ['8rem', '1'],             // 128px, line-height 1
        'imgclamped': 'clamp(1rem, .629rem + 1.524vw, 2rem)',
        'textclamped': 'clamp(2rem,-.6rem + 10.667vw,9rem)',
      },

      padding: {
        'custom-padding': 'clamp(3rem, 2.257rem + 3.048vw, 5rem)',
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
      "background": {
      "light": "#ffffff",
      "dark": "#1a1a1a",
      "red": "#FF0000",
      "gray": "#3f3f46",
    },
    "foreground": {
      "light": "#000000",
      "dark": "#333333",
    },
      },
    },
  },
  plugins: [addVariablesForColors],
} satisfies Config;