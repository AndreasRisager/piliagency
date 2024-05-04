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
			title: "External URL",
			description: "example: https://www.pepsi.com",
			hidden: ({ parent, value }) => !value && !!parent?.internal,
		},
		{
			name: "internal",
			type: "string",
			title: "Internal URL",
			description: "example: /cases/pepsi",
			hidden: ({ parent, value }) => !value && !!parent?.external,
		},
	],
};
