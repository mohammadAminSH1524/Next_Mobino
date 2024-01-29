import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryText: "rgb(var(--primaryText) / <alpha-value>)",
        secondaryText: "rgb(var(--secondaryText) / <alpha-value>)",
        primaryBg: "rgb(var(--primaryBackground) / <alpha-value>)",
        inputBg: "rgb(var(--inputBackground) / <alpha-value>)",
        error: "rgb(var(--error) / <alpha-value>)",
        customGreen: "#53c28b",

        // "opaque-black": "rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
}
export default config
