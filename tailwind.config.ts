import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import typography from '@tailwindcss/typography';

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
        'mw-brown': '#5D4B49',
      }
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        moneywisekids: {
          'primary': '#676f9d',
          'secondary': '#d7ac82',
          'accent': '#93a9c7',
          'neutral': '#3d4451',
          'base-100': '#f3e5d8',
          'info': '#93a9c7',
        },
      },
      'dark',
      'cupcake',
    ],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: true,
    themeRoot: 'root',
  },
};
export default config;
