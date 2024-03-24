export const partnersPage = {
	name: "partnersPage",
	title: "Partners",
	type: "document",
	fields: [
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			hidden: true,
		},
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
			name: "images",
			type: "array",
			title: "Images",
			of: [
				{
					name: "image",
					type: "image",
					title: "Image",
					options: {
						hotspot: true,
					},
				},
			],
		},
	],
	preview: {
		prepare() {
			return {
				title: "Partners Page",
			};
		},
	},
};
