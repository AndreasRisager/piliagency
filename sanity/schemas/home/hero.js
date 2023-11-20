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
			type: "string",
			validation: (Rule) => Rule.required(),
		},
	],
	preview: {
		select: {
			title: "title",
			subtitle: "description",
		},
		prepare({ title, subtitle }) {
			return {
				title,
				subtitle: "[Hero] - " + subtitle,
			};
		},
	},
};
