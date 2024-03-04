/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'tech':['Share Tech', 'sans-serif' ]
    },
    extend: {
      colors: {
        one: '#096C47',
        two: '#0B8457',
        three: '#EAC100',
        four: '#F8F1D0',
        primary: '#F0A500',
        secondary: '#CF7500',
        tertiary: '#F4F4F4',
        dashPrimary:'#182237',
        dashSecondary:'#183237',
        dashTertiary:'#F9F6F7'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}
