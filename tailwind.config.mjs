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
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme('colors.neutral.200'),
						'--tw-prose-headings': theme('colors.neutral.100'),
						'--tw-prose-bold': theme('colors.neutral.100'),
					}
				}
			})
		},
	},
	plugins: [require('tailwindcss-animated'), require('@tailwindcss/typography')],
}
