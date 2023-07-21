/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Configure your color palette here
				'midnight': '#1D2024',
				'orange': '#F37515'
			}
		},
	},
	plugins: [],
}
