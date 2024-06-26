import { CodeBlockIcon } from "@sanity/icons";

export const hero = {
	name: "hero",
	title: "Hero",
	type: "object",
	icon: CodeBlockIcon,
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
			type: "text",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "image",
			title: "image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "primaryButton",
			title: "Primary Button",
			type: "link",
		},
		{
			name: "secondaryButton",
			title: "Secondary Button",
			type: "link",
		},
	],
	preview: {
		select: {
			title: "title",
			subtitle: "description",
			media: "image",
		},
		prepare({ media, title, subtitle }) {
			return {
				title,
				subtitle: "[Hero] - " + subtitle,
				media,
			};
		},
	},
};
