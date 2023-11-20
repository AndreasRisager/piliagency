import { InlineElementIcon } from "@sanity/icons";

export const partners = {
	name: "partners",
	title: "Partners",
	type: "object",
	icon: InlineElementIcon,
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
			type: "array",
			of: [
				{
					type: "block",
					marks: {
						decorators: [
							{ title: "Strong", value: "strong" },
							{ title: "Emphasis", value: "em" },
							{ title: "Code", value: "code" },
							{ title: "Underline", value: "underline" },
							{ title: "Strike", value: "strike-through" },
						],
						annotations: [
							{
								title: "URL",
								name: "link",
								type: "object",
								fields: [
									{
										title: "URL",
										name: "href",
										type: "string",
									},
								],
							},
						],
					},
				},
			],
			validation: (Rule) =>
				Rule.custom((value) => {
					if (!value) {
						return "Required";
					}
					return true;
				}),
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
			options: {
				layout: "grid",
			},
			validation: (Rule) =>
				Rule.custom((value) => {
					if (value && value?.length > 6) {
						return "You can only insert up to 6 images";
					}
					return true;
				}),
		},
	],
	preview: {
		select: {
			title: "title",
			subtitle: "description",
			media: "images.0.asset",
		},
		prepare({ title, subtitle, media }) {
			const block = (subtitle || []).find((block) => block._type === "block");

			return {
				title,
				subtitle:
					"[Partners] - " +
					block.children
						.filter((child) => child._type === "span")
						.map((span) => span.text)
						.join(""),
				media,
			};
		},
	},
};
