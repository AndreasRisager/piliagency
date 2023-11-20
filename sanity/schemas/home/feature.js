import { BlockElementIcon } from "@sanity/icons";

export const feature = {
	name: "feature",
	title: "Feature",
	type: "object",
	icon: BlockElementIcon,
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "text",
			title: "Text",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "image",
			title: "image",
			type: "image",
			options: {
				hotspot: true,
			},
			validation: (Rule) =>
				Rule.custom((value) => {
					if (!value) {
						return "Please provide an image";
					}
					return true;
				}),
		},
		{
			name: "fullWidth",
			title: "Full Width",
			initialValue: false,
			type: "boolean",
			validation: (Rule) => Rule.required(),
		},
	],
	preview: {
		select: {
			title: "title",
			subtitle: "text",
			media: "image",
		},
		prepare({ title, subtitle, media }) {
			return {
				title,
				subtitle: "[Feature] - " + subtitle,
				media,
			};
		},
	},
};
