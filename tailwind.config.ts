import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF7ED",
        "cream-soft": "#FFFBF5",
        magenta: {
          DEFAULT: "#C91463",
          dark: "#9F0F4E",
          light: "#FCE7F3",
        },
        peach: {
          DEFAULT: "#FDBA74",
          light: "#FED7AA",
        },
        ink: "#111111",
        muted: "#6B7280",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        section: ["var(--font-marcellus)", "serif"],
        label: ["var(--font-poppins)", "sans-serif"],
        footer: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(17, 17, 17, 0.08)",
        card: "0 12px 30px rgba(201, 20, 99, 0.10)",
      },
      borderRadius: {
        card: "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
