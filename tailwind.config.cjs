/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		colors: {
        'ui.fg': '#252835',
        'ui.bg': '#20232f',
        'ui.line': '#1b1f28',
		'syntax.standard': '#d4d4d8',
		'syntax.muted': '#616168',
		'syntax.hover': '#7dd3fc'
      },
		},
	},
	plugins: [],
}
