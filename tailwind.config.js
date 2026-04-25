export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#10B981",
        obsidian: "#1C1917",
        "beige-light": "#F5F5F4",
        "beige-dark": "#E7E5E4",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        syne: ["var(--font-syne)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
