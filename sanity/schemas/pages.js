export const pages = {
	name: "pages",
	title: "Pages",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "description",
			title: "Description",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: "pageBuilder",
			title: "Page Builder",
			type: "pageBuilder",
		},
	],
	preview: {
		select: {
			title: "title",
			subtitle: "slug",
		},
		prepare({ title, subtitle }) {
			return {
				title,
				subtitle: "/" + subtitle.current,
			};
		},
	},
};
