import type { Config } from "tailwindcss"

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primaryText: "var(--primary-text)",
        secondaryText: "var(--secondary-text)",
        accent: "var(--accent)",
        container: "var(--container)",
        innerContainer: "var(--inner-container)"
      }
    }
  },
  plugins: []
} satisfies Config
