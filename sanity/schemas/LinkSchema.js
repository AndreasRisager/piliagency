export default {
	name: "link",
	title: "Link",
	type: "object",
	fields: [
		{
			name: "text",
			title: "Text",
			type: "string",
		},
		{
			name: "external",
			type: "url",
			title: "URL",
			hidden: ({ parent, value }) => !value && !!parent?.internal,
		},
		{
			name: "internal",
			type: "reference",
			to: [
				{ type: "pages" },
				{ type: "partnersPage" },
				{ type: "home" },
				{ type: "cases" },
			],
			hidden: ({ parent, value }) => !value && !!parent?.external,
		},
	],
};
