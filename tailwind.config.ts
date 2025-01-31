import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, String(val)]) 
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
  darkMode: "class",
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
        black: "900",
      },
      fontSize: {
        xs: ["0.75rem", "1rem"],
        sm: ["0.875rem", "1.25rem"],
        base: ["1rem", "1.5rem"],
        lg: ["1.125rem", "1.75rem"],
        xl: ["1.25rem", "1.75rem"],
        "2xl": ["1.5rem", "2rem"],
        "3xl": ["1.875rem", "2.25rem"],
        "4xl": ["2.25rem", "2.5rem"],
        "5xl": ["3rem", "1"],
        "6xl": ["3.75rem", "1"],
        "7xl": ["clamp(1.56rem,.468rem + 4.48vw,4.5rem)", "5rem"],
        "8xl": ["6rem", "1"],
        "9xl": ["8rem", "1"],
        imgclamped: "clamp(1rem, .629rem + 1.524vw, 2rem)",
        textclamped: "clamp(2rem,-.6rem + 10.667vw,9rem)",
        verticalbodyclamped: "clamp(0.8rem, .8rem + .762vw, 1.2rem)",
      },
      padding: {
        "custom-padding": "clamp(3rem, 2.257rem + 3.048vw, 5rem)",
      },
      animation: {
        'rotate-text': 'rotateText 10s linear infinite',
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        circle: "moveCircle 10s linear infinite",
        aurora: "aurora 10s ease-in-out infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "spin-border": "spin-border 3s linear infinite", // Add the spinning border animation
        shimmer: "shimmer 2s linear infinite", // Add shimmer animation
      },
      keyframes: {
        rotateText: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
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
        "spin-border": {
          // Define the keyframes for the spinning border
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        shimmer: {
          // Shimmer animation keyframes
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
      colors: {
        textcolor: {
          yellow: "#F5CB5C",
          lightcolor:"#C449C2"
         
        },
        background: {
          light: "#f8f8f8",
          dark: "#1a1a1a",
          red: "#FF0000",
          gray: "#3f3f46",
          customgradient: 'linear-gradient(90deg, rgba(226,183,20,1) 0%, rgba(245,203,92,1) 35%)',
        },
        foreground: {
          light: "#000000",
          dark: "#333333",
        },
      },
    },
  },
  plugins: [addVariablesForColors],
} satisfies Config;
