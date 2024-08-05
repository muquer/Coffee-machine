import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        olive: {
          50:'#f5faf3',
          100:'#e9f3e5',
          200:'#d2e7cb',
          300:'#9bc88b',
          400:'#83b672',
          500:'#62994e',
          600:'#4d7d3c',
          700:'#3f6332',
          800:'#34502b',
          900:'#2c4225',
          950:'#142310'
        },
        mossGreen: {
          50:'#f5faf3',
          100:'#e8f5e3',
          200:'#d2e9c9',
          300:'#aed7a0',
          400:'#81bb6d',
          500:'#5e9f48',
          600:'#498237',
          700:'#3c672e',
          800:'#335229',
          900:'#2a4423',
          950:'#13240f'
        },
      },
    },
  },
  plugins: [],
};
export default config;
