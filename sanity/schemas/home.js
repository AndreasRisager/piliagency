import { defineArrayMember, defineField } from "sanity";

export const home = {
	name: "home",
	title: "Home",
	type: "document",
	fields: [
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			initialValue: "/",
			hidden: true,
		}),
		defineField({
			name: "pageBuilder",
			type: "array",
			title: "Page Content",
			of: [
				defineArrayMember({
					title: "Hero",
					name: "hero",
					type: "hero",
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
			],
		}),
	],
	preview: {
		prepare() {
			return {
				title: "Home Page",
			};
		},
	},
};
