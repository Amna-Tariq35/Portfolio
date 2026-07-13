import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#130B15",
          elevated: "#1C1220",
          line: "rgba(245,241,248,0.09)",
        },
        porcelain: {
          DEFAULT: "#F5F1F8",
          muted: "#AFA5BE",
        },
        gold: {
          DEFAULT: "#E7B563",
          soft: "#F3CE93",
        },
        rose: {
          DEFAULT: "#E38C82",
          soft: "#EFAAA0",
        },
        orchid: {
          DEFAULT: "#B79FE0",
          soft: "#D2C2EE",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
      backgroundImage: {
        "gradient-warm": "linear-gradient(135deg, #E7B563 0%, #E38C82 100%)",
        "gradient-dusk": "linear-gradient(135deg, #E38C82 0%, #B79FE0 100%)",
        "gradient-glow": "linear-gradient(135deg, #B79FE0 0%, #E7B563 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
