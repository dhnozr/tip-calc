/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(172, 67%, 45%)',
        DarkGrayishCyan: 'hsl(186, 14%, 43%)',
        VeryDarkCyan: 'hsl(183, 100%, 15%)',
        GrayishCyan: 'hsl(184, 14%, 56%)',
        LightGrayishCyan: 'hsl(185, 41%, 84%)',
        VeryLightGrayishCyan: 'hsl(189, 41%, 97%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        spaceMono: ['"Space Mono", monospace;'],
      },
    },
  },
  plugins: [],
};
