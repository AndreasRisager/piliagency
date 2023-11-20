import { SparklesIcon } from "@sanity/icons";

export const showCreators = {
	name: "showCreators",
	title: "Creators",
	type: "object",
	icon: SparklesIcon,
	fields: [
		{
			name: "creators",
			type: "array",
			of: [
				{
					type: "reference",
					to: { type: "creators" },
				},
			],
		},
	],
	preview: {
		select: {
			creator0: "creators.0.name",
			creator1: "creators.1.name",
			creator2: "creators.2.name",
			creator3: "creators.3.name",
		},
		prepare({ creator0, creator1, creator2, creator3 }) {
			const creators = [creator0, creator1, creator2].filter(Boolean);
			const subtitle = creators.length > 0 ? `${creators.join(", ")}` : "";
			const hasMoreCreators = Boolean(creator3);
			return {
				title: hasMoreCreators ? `${subtitle} & more` : subtitle,
				subtitle: "[Creators]",
			};
		},
	},
};
