/** @type {import('tailwindcss').Config} */
export default {
  content: [
		'./index.css',
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
			colors: {
				gray:{
					100: '#eef0f4',
					200: '#dde1e8',
					300: '#cbd3dd',
					400: '#bac4d1',
					500: '#a9b5c6',
					600: '#7d8fa9',
					700: '#586a84',
					800: '#3b4758',
					900: '#1d232c',
					1000: '#161b21',
					1100: '#0f1216',
					1200: '#07090b',
				},
				blue:{
					100: '#e5f3ff',
					200: '#cbe6ff',
					300: '#b1daff',
					400: '#97cdff',
					500: '#7dc1ff',
					600: '#319dff',
					700: '#0077e4',
					800: '#005098',
					900: '#00284C',
				}
			},
      spacing: {
        '0.5': '0.125rem', // Adiciona um padding de 2px
      },
			divideColor: ['group-hover'],
			backgroundColor: ['group-focus'],
		},
  },
  plugins: [],
}


