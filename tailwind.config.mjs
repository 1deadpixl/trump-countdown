/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Public Sans', ...defaultTheme.fontFamily.sans],
				'orbitron': ['Orbitron', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				'old-glory-blue': '#0A3161',
				'old-glory-red': '#B31942'
			}
		},
	},
	plugins: [],
}
