import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
      // ...colors,
      'primaryGreen': '#014421',
      'primaryBeige': "#F5F5DC",
      'primaryYellow': "#EEC438",
      'primaryYellowTrans': "rgba(238, 196, 56, 0.2)",
      'primaryGray': "#3C4142",
      'secondaryGray': "#A8ABAC",
    },
    },
  },
  plugins: [],
}
export default config
