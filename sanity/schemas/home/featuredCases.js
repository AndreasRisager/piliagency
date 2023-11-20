import { InlineElementIcon } from "@sanity/icons";

export const featuredCases = {
	name: "featuredCases",
	title: "Featured Cases",
	type: "object",
	icon: InlineElementIcon,
	fields: [
		{
			type: "array",
			name: "cases",
			title: "Featured Cases",
			of: [
				{
					type: "reference",
					to: { type: "cases" },
				},
			],
		},
	],
	preview: {
		select: {
			cases: "cases",
			case0: "cases.0.title",
			case1: "cases.1.title",
			case2: "cases.2.title",
			case3: "cases.3.title",
			case4: "cases.4.title",
		},
		prepare: ({ cases, case0, case1, case2, case3, case4 }) => {
			const ArrayOfCases = [case0, case1, case2, case3, case4].filter(Boolean);
			const title =
				ArrayOfCases.length > 0 ? `${ArrayOfCases.join(" | ")}` : "";
			const amount = Object.keys(cases).length;
			return {
				title,
				subtitle: "[Featured Cases] - " + amount + " Cases",
			};
		},
	},
};
