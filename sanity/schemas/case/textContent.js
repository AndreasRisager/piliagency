import { BlockContentIcon } from "@sanity/icons";

export const textContent = {
	name: "textContent",
	title: "Text Content",
	type: "object",
	icon: BlockContentIcon,
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "text",
			title: "Text",
			type: "string",
		},
	],
	preview: {
		select: {
			title: "title",
			subtitle: "text",
		},
		prepare({ title, subtitle }) {
			return {
				title,
				subtitle: "[Text] - " + subtitle,
			};
		},
	},
};
