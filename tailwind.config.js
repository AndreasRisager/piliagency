/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				beige: "hsl(36, 31%, 63%)",
				beigehover: "hsl(36, 31%, 73%)",
			},
			height: {
				innerheight: "calc(100vh - 72px)",
			},
			maxHeight: {
				innerheight: "calc(100vh - 72px)",
			},
			gridTemplateColumns: {
				"case-card": "repeat(auto-fit, 403px)",
			},
		},
	},
	plugins: [],
};
