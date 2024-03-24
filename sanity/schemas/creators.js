import { preview } from "sanity-plugin-icon-picker";

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
			name: "medialinks",
			title: "Links",
			type: "array",
			of: [
				{
					name: "medialink",
					title: "Link",
					type: "object",
					fields: [
						{
							name: "url",
							title: "URL",
							type: "url",
						},
						{
							name: "text",
							title: "Link Text",
							type: "string",
						},
						{
							name: "icon",
							title: "Icon",
							type: "iconPicker",
							options: {
								outputFormat: "react",
								storeSvg: true,
								providers: ["si"],
							},
						},
					],
					preview: {
						select: {
							title: "text",
							subtitle: "url",
							media: "icon",
						},
						prepare({ title, subtitle, media }) {
							return {
								title,
								media: media ? preview(media) : "",
								subtitle,
							};
						},
					},
				},
			],
		},
	],
	preview: {
		select: {
			title: "name",
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
