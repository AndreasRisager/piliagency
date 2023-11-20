import { ImagesIcon } from "@sanity/icons";

export const gallery = {
	name: "gallery",
	type: "object",
	title: "Gallery",
	icon: ImagesIcon,
	fields: [
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
			options: {
				layout: "grid",
			},
			validation: (Rule) =>
				Rule.custom((value) => {
					if (!value) {
						return "Required";
					}
					return true;
				}),
		},
		{
			name: "display",
			type: "string",
			title: "Display as",
			description: "How should we display these images?",
			options: {
				list: [
					{ title: "In-line", value: "inline" },
					{ title: "Full Width", value: "fullWidth" },
					{ title: "Stacked on top of eachother", value: "stacked" },
				],
				layout: "radio", // <-- defaults to 'dropdown'
			},
			validation: (Rule) =>
				Rule.custom((value) => {
					if (!value) {
						return "Required";
					}
					return true;
				}),
		},
	],
	preview: {
		select: {
			images: "images",
			image: "images.0.asset",
			subtitle: "display",
		},
		prepare(selection) {
			const { images, image, subtitle } = selection;
			const amount = Object.keys(images).length;

			return {
				title: `${amount} ${amount > 1 ? "Images" : "Image"}`,
				subtitle: "[Gallery] - " + subtitle,
				media: image,
			};
		},
	},
};
