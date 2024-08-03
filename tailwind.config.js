/** @type {import('tailwindcss').Config} */
export default {
  content: [
		'./index.css',
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      spacing: {
        '0.5': '2px', // Adiciona um padding de 2px
      },
		},
  },
  plugins: [],
}


