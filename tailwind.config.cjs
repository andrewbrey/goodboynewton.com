// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			colors: {
				brand: "#9f7f57",
				accent: "var(--accent, #9f7f57)"
			},
			fontFamily: {
				sans: ['"Sriracha"', ...defaultTheme.fontFamily.sans],
				display: "'Luckiest Guy'"
			},
			screens: {
				"3xl": "2400px"
			}
		}
	},

	plugins: []
};

module.exports = config;
