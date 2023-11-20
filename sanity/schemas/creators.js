export const creators = {
	name: "creators",
	title: "Creators",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: "images",
			title: "images",
			type: "array",
			of: [
				{
					type: "image",
					options: {
						hotspot: true,
					},
				},
			],
			validation: (Rule) =>
				Rule.custom((value) => {
					if (!value) {
						return "Please provide an image";
					}
					return true;
				}),
		},
		{
			name: "bio",
			title: "Bio",
			type: "blockContent",
		},
		{
			name: "tags",
			title: "Tags",
			type: "array",
			of: [
				{
					name: "tag",
					title: "Tag",
					type: "string",
				},
			],
			options: {
				layout: "tags",
			},
		},
		{
			name: "instagram",
			title: "Instagram",
			placeholder: "username",
			type: "string",
		},
		{
			name: "audience",
			title: "Audience",
			type: "object",
			fields: [
				{
					name: "text",
					title: "Text",
					type: "string",
				},
				{
					name: "followers",
					title: "Followers",
					type: "string",
				},
				{
					name: "denmark",
					description: "Percent lives in Denmark",
					title: "Denmark",
					type: "number",
				},
				{
					name: "women",
					description: "Percent is women",
					title: "Women",
					type: "number",
				},
				{
					name: "men",
					description: "Percent is men",
					title: "Men",
					type: "number",
				},
			],
		},
	],
	preview: {
		select: {
			title: "name",
			subtitle: "instagram",
			media: "images.0.asset",
		},
		prepare({ title, subtitle, media }) {
			return {
				title,
				media,
				subtitle: subtitle ? `@${subtitle}` : "",
			};
		},
	},
};
