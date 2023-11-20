import { UsersIcon } from "@sanity/icons";

export const about = {
	name: "about",
	title: "About Us",
	type: "object",
	icon: UsersIcon,
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "description",
			title: "Description",
			type: "string",
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
	],
	preview: {
		select: {
			title: "title",
			subtitle: "description",
			media: "image",
		},
		prepare({ title, subtitle, media }) {
			return {
				title,
				subtitle: "[About Us] - " + subtitle,
				media,
			};
		},
	},
};
