/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': ['Nunito', 'system-ui', 'sans-serif'],
			'mono': ['Ubuntu Mono', 'monospace'],
		},
		extend: {
			container: {
				center: true,
				screens: {
					"2xl": "1440px",
				}
			}
		},
	},
	plugins: [require('tailwindcss-animated')],
}
