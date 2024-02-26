module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms')({
			strategy: 'class'
		}),
		require('tailwind-dracula')()
	]
};
