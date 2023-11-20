import { CodeBlockIcon } from "@sanity/icons";

export const caseHero = {
	name: "caseHero",
	title: "Hero",
	type: "object",
	icon: CodeBlockIcon,
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
			title: "Results",
			name: "results",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "title",
							title: "Title",
							type: "string",
						},
						{
							name: "data",
							title: "Data",
							type: "string",
						},
					],
					preview: {
						select: {
							title: "title",
							subtitle: "data",
						},
					},
				},
			],
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "publishedAt",
			title: "Published at",
			type: "date",
			options: {
				dateFormat: "DD-MM-YYYY",
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
				subtitle: "[Hero] - " + subtitle,
				media,
			};
		},
	},
};
