import { defineArrayMember } from "sanity";

export const pageBuilder = {
	title: "Page Builder",
	name: "pageBuilder",
	type: "array",
	of: [
		defineArrayMember({
			title: "Hero",
			name: "hero",
			type: "hero",
		}),
		defineArrayMember({
			title: "Text Editor",
			name: "textEditor",
			type: "object",
			fields: [
				{
					type: "blockContent",
					title: "Content",
					name: "content",
				},
			],
			preview: {
				prepare() {
					return {
						title: "Text Editor",
					};
				},
			},
		}),
		defineArrayMember({
			title: "Featured Cases",
			name: "featuredCases",
			type: "featuredCases",
		}),
		defineArrayMember({
			title: "Partners",
			name: "partners",
			type: "partners",
		}),
		defineArrayMember({
			title: "About Us",
			name: "about",
			type: "about",
		}),
		defineArrayMember({
			title: "Feature",
			name: "feature",
			type: "feature",
		}),
		defineArrayMember({
			title: "Case Hero",
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
	options: {
		modal: {
			type: "dialog",
			width: "100%",
		},
	},
};
