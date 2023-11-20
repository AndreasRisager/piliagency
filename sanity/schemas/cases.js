import { defineArrayMember, defineField } from "sanity";

export const cases = {
	name: "cases",
	title: "Cases",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: "thumbnail",
			title: "Thumbnail",
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
		defineField({
			name: "pageBuilder",
			type: "array",
			title: "Page Content",
			of: [
				defineArrayMember({
					title: "Hero",
					name: "caseHero",
					type: "caseHero",
				}),
				defineArrayMember({
					title: "Text Content",
					name: "textContent",
					type: "textContent",
				}),
				defineArrayMember({
					title: "Creators",
					name: "showCreators",
					type: "showCreators",
				}),
				defineArrayMember({
					title: "Gallery",
					name: "gallery",
					type: "gallery",
				}),
				defineArrayMember({
					title: "Video Gallery",
					name: "videoGallery",
					type: "videoGallery",
				}),
			],
		}),
	],

	preview: {
		select: {
			title: "title",
			subtitle: "slug.current",
			media: "thumbnail",
		},
		prepare({ title, subtitle, media }) {
			return {
				title,
				media,
				subtitle: "/cases/" + subtitle,
			};
		},
	},
};
